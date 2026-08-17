interface ViewTransitionLike {
  ready: Promise<void>;
  finished: Promise<void>;
  skipTransition?: () => void;
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => ViewTransitionLike;
};

let wiping = false;
let viewTransitionUsable = true;
let systemThemeBound = false;

export function applyThemePreference(): void {
  const saved = localStorage.getItem('theme');
  document.documentElement.dataset.theme =
    saved ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export function initThemeToggle(): void {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  if (!toggle || toggle.dataset.themeBound === 'true') return;
  toggle.dataset.themeBound = 'true';

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const doc = document as ViewTransitionDocument;

    const apply = () => {
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
      toggle.classList.remove('icon-pop');
      void toggle.offsetWidth;
      toggle.classList.add('icon-pop');
    };

    if (
      !viewTransitionUsable ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !doc.startViewTransition
    ) {
      apply();
      return;
    }

    if (wiping) return;
    wiping = true;
    root.style.transition = 'none';
    root.classList.add('vt-theme');

    let cleaned = false;
    let applied = false;
    let failsafe = 0;
    let forceTimer = 0;

    const applyOnce = () => {
      if (applied) return;
      applied = true;
      apply();
    };

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      clearTimeout(failsafe);
      clearTimeout(forceTimer);
      root.style.removeProperty('transition');
      root.classList.remove('vt-theme');
      wiping = false;
    };

    failsafe = window.setTimeout(cleanup, 1000);

    let transition: ViewTransitionLike;
    try {
      transition = doc.startViewTransition(applyOnce);
    } catch {
      viewTransitionUsable = false;
      cleanup();
      applyOnce();
      return;
    }

    forceTimer = window.setTimeout(() => {
      if (applied) return;
      viewTransitionUsable = false;
      try {
        transition.skipTransition?.();
      } catch {
        // 部分 WebView 暴露方法但调用仍会失败，直接降级即可。
      }
      applyOnce();
      cleanup();
    }, 150);

    transition.ready
      .then(() => {
        const rect = toggle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const radius = Math.hypot(
          Math.max(centerX, window.innerWidth - centerX),
          Math.max(centerY, window.innerHeight - centerY),
        );

        root.animate(
          {
            clipPath: [
              `circle(0px at ${centerX}px ${centerY}px)`,
              `circle(${radius}px at ${centerX}px ${centerY}px)`,
            ],
          },
          {
            duration: 450,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {});

    transition.finished
      .catch(() => {
        viewTransitionUsable = false;
      })
      .finally(cleanup);
  });

  if (!systemThemeBound) {
    systemThemeBound = true;
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
      }
    });
  }
}
