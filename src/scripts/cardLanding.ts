/**
 * 卡纸落定入场效果（微动效增强）
 * - 仅用于首页文章组与列表当前页可见条目；
 * - 默认 HTML 始终可见（渐进增强，不依赖脚本解除隐藏）；
 * - 严格遵循 prefers-reduced-motion，若开启则直接跳过；
 * - 浏览器前进后退历史导航跳过动画；
 * - 指针进入或键盘获焦时立即结束入场动画，确保交互零延迟响应；
 * - 列表排序或页面卸载时清理/结束动画。
 */

const activeAnimations: Set<Animation> = new Set();
let landingExecutedForPage = false;
let abortController: AbortController | null = null;

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

export function initCardLanding(): void {
  if (landingExecutedForPage) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;

  // 检查是否为前进后退历史导航
  const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
    return;
  }

  // 获取目标卡片：首页文章组或列表页当前可见条目
  const rows = Array.from(
    document.querySelectorAll<HTMLElement>(
      '.post-list .post-row, .posts-list .post-row:not([hidden])',
    ),
  ).slice(0, 6);

  if (rows.length === 0) return;

  abortController?.abort();
  abortController = new AbortController();
  const { signal } = abortController;

  const startLanding = () => {
    if (landingExecutedForPage || signal.aborted) return;
    landingExecutedForPage = true;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const distance = isMobile ? 3 : 6;
    const duration = 280;

    rows.forEach((row, index) => {
      if (signal.aborted) return;
      const delay = Math.min(index * 40, 120);

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

      // 若用户提前交互（鼠标移入或聚焦），立即结束入场动画以保障响应性
      const finishOnInteract = () => {
        if (activeAnimations.has(anim)) {
          anim.finish();
        }
      };

      row.addEventListener('pointerenter', finishOnInteract, { once: true, signal });
      row.addEventListener('focusin', finishOnInteract, { once: true, signal });
    });
  };

  // 检查幕布状态：若正在遮罩/揭开中，等待幕布完全揭开后再播放
  const curtain = document.getElementById('page-curtain');
  if (curtain && curtain.hasAttribute('data-state')) {
    window.addEventListener('curtain:finish', startLanding, { once: true, signal });
  } else {
    requestAnimationFrame(() => {
      requestAnimationFrame(startLanding);
    });
  }
}

// 页面导航前清理
document.addEventListener('astro:before-preparation', () => {
  cancelCardLanding();
  landingExecutedForPage = false;
  abortController?.abort();
});

document.addEventListener('astro:page-load', () => {
  landingExecutedForPage = false;
  initCardLanding();
});
