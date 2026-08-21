const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

function bindNav() {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const nav = document.querySelector<HTMLElement>('[data-mobile-nav]');
  const open = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const close = document.querySelector<HTMLButtonElement>('[data-menu-close]');

  function setMenu(isOpen: boolean) {
    if (!nav || !open) return;
    document.body.classList.toggle('menu-open', isOpen);
    nav.classList.toggle('is-open', isOpen);
    nav.hidden = !isOpen;
    open.setAttribute('aria-expanded', String(isOpen));
  }

  function setSolid() {
    header?.classList.toggle('is-solid', window.scrollY > 24);
  }

  open?.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('scroll', setSolid, { passive: true });
  setSolid();
}

function bindVideo() {
  const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-video-toggle]');
  if (!video || !toggle) return;

  if (reducedMotion) {
    video.pause();
    toggle.classList.remove('is-playing');
    toggle.setAttribute('aria-label', 'Play background video');
  }

  toggle.addEventListener('click', () => {
    if (video.paused) {
      void video.play();
      toggle.classList.add('is-playing');
      toggle.setAttribute('aria-label', 'Pause background video');
    } else {
      video.pause();
      toggle.classList.remove('is-playing');
      toggle.setAttribute('aria-label', 'Play background video');
    }
  });
}

function bindCursor() {
  const cursor = document.querySelector<HTMLElement>('[data-cursor]');
  const cursorDot = document.querySelector<HTMLElement>('[data-cursor-dot]');
  const cursorLabel = document.querySelector<HTMLElement>('[data-cursor-label]');
  if (!cursor || !cursorDot || !cursorLabel || reducedMotion || !finePointer) return;

  const defaultLabel = cursorLabel.textContent || 'Nara Studio';
  let x = 0;
  let y = 0;
  let currentX = 0;
  let currentY = 0;
  let dotX = 0;
  let dotY = 0;

  document.body.classList.add('cursor-ready');

  window.addEventListener(
    'pointermove',
    (event) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add('is-visible');
      cursorDot.classList.add('is-visible');
    },
    { passive: true },
  );

  document.addEventListener('pointerover', (event) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor-label], a, button');
    if (!target) return;
    const large = target.matches('.work-card, .work-row, [data-video-toggle], .proof-frame');
    cursor.classList.toggle('is-large', large);
    cursor.classList.toggle('is-small', !large);
    cursorLabel.textContent = target.dataset.cursorLabel || defaultLabel;
  });

  document.addEventListener('pointerout', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('[data-cursor-label], a, button')) {
      cursor.classList.remove('is-small', 'is-large');
      cursorLabel.textContent = defaultLabel;
    }
  });

  const sections = [...document.querySelectorAll<HTMLElement>('[data-cursor-fill]')];
  const applySection = () => {
    let active: HTMLElement | undefined;
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.25) {
        active = section;
      }
    }
    if (!active) return;
    document.documentElement.style.setProperty('--cursor-fill', active.dataset.cursorFill || '#f2efa3');
    document.documentElement.style.setProperty('--cursor-text', active.dataset.cursorText || '#1d1d1b');
  };

  window.addEventListener('scroll', applySection, { passive: true });
  applySection();

  const tick = () => {
    currentX += (x - currentX) * 0.22;
    currentY += (y - currentY) * 0.22;
    dotX += (x - dotX) * 0.45;
    dotY += (y - dotY) * 0.45;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

bindNav();
bindVideo();
bindCursor();
