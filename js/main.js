// Bootstrap form validation + footer year
(() => {
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      form.classList.add('was-validated');
    });
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
