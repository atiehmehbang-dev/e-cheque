(() => {
  const main = document.querySelector('main');
  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const themeLabel = document.querySelector('.theme-label');
  const menuButton = document.querySelector('.menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileCta = document.querySelector('.mobile-cta');

  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const saved = localStorage.getItem('mellat-theme');
  const initialTheme = saved === 'dark' || saved === 'light' ? saved : preferred;

  function setTheme(theme) {
    main.dataset.theme = theme;
    const isLight = theme === 'light';
    themeIcon.textContent = isLight ? '☾' : '☀';
    themeLabel.textContent = isLight ? 'تیره' : 'روشن';
    themeButton.setAttribute('aria-label', isLight ? 'فعال‌کردن حالت تیره' : 'فعال‌کردن حالت روشن');
    themeButton.title = isLight ? 'حالت تیره' : 'حالت روشن';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#ffffff' : '#151517');
  }

  setTheme(initialTheme);

  themeButton.addEventListener('click', () => {
    const next = main.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('mellat-theme', next);
    setTheme(next);
  });

  function setMenu(open) {
    menuButton.classList.toggle('is-open', open);
    mobileNav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'بستن فهرست' : 'باز کردن فهرست');
    mobileNav.setAttribute('aria-hidden', String(!open));
  }

  menuButton.addEventListener('click', () => setMenu(!mobileNav.classList.contains('is-open')));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

  if ('IntersectionObserver' in window && mobileCta) {
    const visibleTargets = new Set();
    const targets = document.querySelectorAll('.final-cta, footer');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visibleTargets.add(entry.target) : visibleTargets.delete(entry.target));
      const visible = visibleTargets.size === 0;
      mobileCta.classList.toggle('is-visible', visible);
      mobileCta.classList.toggle('is-hidden', !visible);
      mobileCta.setAttribute('aria-hidden', String(!visible));
      mobileCta.tabIndex = visible ? 0 : -1;
    }, { rootMargin: '0px 0px 80px 0px', threshold: 0.01 });
    targets.forEach(target => observer.observe(target));
  }
})();
