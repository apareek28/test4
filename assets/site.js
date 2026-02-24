const navLinks = document.querySelectorAll('nav a');
const current = document.body.dataset.page;
for (const link of navLinks) {
  if (link.dataset.page === current) {
    link.setAttribute('aria-current', 'page');
  }
}

const form = document.querySelector('[data-demo-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = document.querySelector('[data-notice]');
    if (notice) {
      notice.hidden = false;
      notice.textContent = 'Thank you. A NEUROFLOW enterprise architect will contact you within one business day.';
    }
    form.reset();
  });
}
