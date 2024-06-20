let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    updateSlideDisplay();
}

function updateSlideDisplay() {
    const slideWidth = slides[0].clientWidth;
    const offset = slideIndex * slideWidth * -1;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initial call to start the slideshow
showSlides();

// Set interval to repeat slideshow
setInterval(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
