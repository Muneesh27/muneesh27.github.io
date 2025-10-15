document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-bs-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlEl.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});


// Lightbox functionality for Case Study gallery
const imageModal = document.getElementById('imageModal');
if (imageModal) {
  imageModal.addEventListener('show.bs.modal', event => {
    const triggerLink = event.relatedTarget;
    const imageUrl = triggerLink.getAttribute('data-bs-image');
    const modalImage = imageModal.querySelector('.modal-image');
    modalImage.src = imageUrl;
  });
}