/**
 * 卡纸落定入场效果（微动效增强）
 * - 仅用于首页文章组与列表当前页可见条目；
 * - 默认 HTML 始终可见（渐进增强，不依赖脚本解除隐藏）；
 * - 使用 IntersectionObserver 按需触发首次进入视口的卡片；
 * - 严格遵循 prefers-reduced-motion，若开启或运行中切换则立即停止；
 * - 浏览器与 Astro 客户端历史导航（traverse / back_forward）跳过动画，保障滚动位置平稳恢复；
 * - 指针进入或键盘获焦时立即结束当前入场动画，确保交互零延迟响应；
 * - 列表排序或页面卸载时清理/结束动画。
 */

interface AstroBeforePreparationEvent extends Event {
  navigationType?: 'push' | 'replace' | 'traverse';
}

const activeAnimations: Set<Animation> = new Set();
let landingObserver: IntersectionObserver | null = null;
let abortController: AbortController | null = null;
let isHistoryTraversal = false;

// 监听 Astro 客户端历史转场
document.addEventListener('astro:before-preparation', (event: Event) => {
  const prepEvent = event as AstroBeforePreparationEvent;
  if (prepEvent.navigationType === 'traverse') {
    isHistoryTraversal = true;
  }
  cancelCardLanding();
  abortController?.abort();
  landingObserver?.disconnect();
  landingObserver = null;
});

// 监听动态减少偏好切换
if (typeof window !== 'undefined') {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionQuery.addEventListener('change', (e) => {
    if (e.matches) {
      cancelCardLanding();
      landingObserver?.disconnect();
      landingObserver = null;
    }
  });
}

export function cancelCardLanding(): void {
  activeAnimations.forEach((anim) => {
    try {
      anim.finish();
    } catch {
      // 忽略已完成的动画
    }
  });
  activeAnimations.clear();
}

function playCardLanding(row: HTMLElement, delay: number, signal: AbortSignal): void {
  if (signal.aborted || row.dataset.landed === 'true') return;
  row.dataset.landed = 'true';

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const distance = isMobile ? 3 : 6;
  const duration = 280;

  const anim = row.animate(
    [{ transform: `translateY(-${distance}px)` }, { transform: 'translateY(0)' }],
    {
      duration,
      delay,
      easing: 'cubic-bezier(0.2, 0, 0, 1)',
      fill: 'none',
    },
  );

  activeAnimations.add(anim);

  const cleanupAnim = () => {
    activeAnimations.delete(anim);
  };
  anim.onfinish = cleanupAnim;
  anim.oncancel = cleanupAnim;

  const finishOnInteract = () => {
    if (activeAnimations.has(anim)) {
      anim.finish();
    }
  };

  row.addEventListener('pointerenter', finishOnInteract, { once: true, signal });
  row.addEventListener('focusin', finishOnInteract, { once: true, signal });
}

export function initCardLanding(): void {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;

  // 检查是否为浏览器原生刷新/前进后退
  const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
    return;
  }

  // 检查是否为 Astro 客户端历史导航
  if (isHistoryTraversal) {
    isHistoryTraversal = false;
    return;
  }

  // 获取目标卡片：首页文章组或列表页当前可见条目（最多取前 8 篇，避免过长列表开销）
  const rows = Array.from(
    document.querySelectorAll<HTMLElement>(
      '.post-list .post-row, .posts-list .post-row:not([hidden])',
    ),
  ).slice(0, 8);

  if (rows.length === 0) return;

  abortController?.abort();
  abortController = new AbortController();
  const { signal } = abortController;

  landingObserver?.disconnect();

  const startObserving = () => {
    if (signal.aborted) return;

    let stagedIndex = 0;
    landingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            landingObserver?.unobserve(target);
            const delay = Math.min(stagedIndex * 40, 120);
            stagedIndex++;
            playCardLanding(target, delay, signal);
          }
        });
      },
      {
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      },
    );

    rows.forEach((row) => {
      if (row.dataset.landed !== 'true') {
        landingObserver?.observe(row);
      }
    });
  };

  // 检查幕布状态：若幕布正在运行，等待揭开完成后再启动观察器与播放
  const curtain = document.getElementById('page-curtain');
  if (curtain && curtain.hasAttribute('data-state')) {
    window.addEventListener('curtain:finish', startObserving, { once: true, signal });
  } else {
    requestAnimationFrame(() => {
      requestAnimationFrame(startObserving);
    });
  }
}

document.addEventListener('astro:page-load', () => {
  initCardLanding();
});
