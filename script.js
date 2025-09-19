// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const overlayNav = document.getElementById('overlayNav');
const closeNav = document.getElementById('closeNav');

menuBtn.addEventListener('click', () => {
  overlayNav.setAttribute('aria-hidden', 'false');
});
closeNav.addEventListener('click', () => {
  overlayNav.setAttribute('aria-hidden', 'true');
});