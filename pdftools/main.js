const toggleButton = document.getElementById('toggleNav');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});