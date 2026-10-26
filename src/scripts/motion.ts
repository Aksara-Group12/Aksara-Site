const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const raf = (fn: FrameRequestCallback) => requestAnimationFrame(fn);

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

let revealObserver: IntersectionObserver | null = null;
let countObserver: IntersectionObserver | null = null;

const bindPage = () => {
  const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal, [data-reveal]'));
  revealObserver?.disconnect();

  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const counters = new Map<Element, number>();

    for (const el of reveals) {
      const parent = el.parentElement ?? document.body;
      const index = counters.get(parent) ?? 0;
      counters.set(parent, index + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 70}ms`);
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          revealObserver?.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    reveals.forEach((el) => revealObserver?.observe(el));
  }

  const countEls = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  countObserver?.disconnect();

  if (!countEls.length) return;

  const run = (el: HTMLElement) => {
    const target = Number.parseFloat(el.dataset.count ?? '0');
    const suffix = el.dataset.suffix ?? '';

    if (!Number.isFinite(target) || reduceMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const duration = 1100;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) raf(step);
    };

    raf(step);
  };

  countObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        countObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );

  countEls.forEach((el) => countObserver?.observe(el));
};

const bindGlobals = () => {
  const onScroll = () => {
    document.querySelector('[data-header]')?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const progress = () => document.querySelector<HTMLElement>('[data-progress]');
  let queued = false;

  const paint = () => {
    queued = false;
    const bar = progress();
    if (!bar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1).toFixed(4)})`;
  };

  const request = () => {
    if (queued) return;
    queued = true;
    raf(paint);
  };

  paint();
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
};

const bindTransition = () => {
  const veil = () => document.getElementById('page-veil');

  document.addEventListener('astro:before-preparation', (event) => {
    if (reduceMotion) return;
    const curtain = veil();
    if (!curtain) return;

    const nav = event as Event & { loader: () => Promise<void> };
    const original = nav.loader;

    nav.loader = async () => {
      curtain.classList.add('is-on');
      await wait(680);
      await original();
    };
  });

  document.addEventListener('astro:after-swap', () => {
    const curtain = veil();
    if (!curtain) return;
    raf(() => curtain.classList.remove('is-on'));
  });
};

bindGlobals();
bindTransition();
bindPage();
document.addEventListener('astro:page-load', bindPage);
