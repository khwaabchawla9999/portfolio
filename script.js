// Theme Toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function getTheme() {
    return localStorage.getItem('theme');
  }

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  // Initialize theme
  const saved = getTheme();
  if (saved === 'dark') {
    html.classList.add('dark');
  } else if (saved === 'light') {
    html.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
  }

  toggle.addEventListener('click', function () {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
})();

// Time Zone Display
(function () {
  const timeEl = document.getElementById('tz-time');

  function updateTime() {
    if (!timeEl) return;
    const now = new Date();
    const options = {
      timeZone: 'Asia/Calcutta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    timeEl.textContent = now.toLocaleTimeString('en-IN', options);
  }

  updateTime();
  setInterval(updateTime, 1000);
})();

// Resume Download
(function () {
  const btn = document.getElementById('download-cv-btn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const url = this.getAttribute('data-url');
    const filename = this.getAttribute('data-filename') || 'Resume.docx';
    if (!url) return;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
})();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
