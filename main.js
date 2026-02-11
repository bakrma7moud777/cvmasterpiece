function openModal() {
  document.getElementById("countryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("countryModal").style.display = "none";
}
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    // If user scrolls more than 300px, show the button
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


