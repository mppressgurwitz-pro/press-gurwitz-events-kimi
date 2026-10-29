(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const forms = document.querySelectorAll('form[data-goal="form"]');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const thanks = form.querySelector('#thanks');
      if (thanks) thanks.hidden = false;
      form.reset();
      if (window.ym) window.ym.reachGoal('form_submit');
    });
  });

  document.querySelectorAll('a[data-goal="telegram"]').forEach(a => {
    a.addEventListener('click', () => {
      if (window.ym) window.ym.reachGoal('telegram_click');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
