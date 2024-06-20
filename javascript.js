let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Calculate the new translateX value
    const translateXValue = -slideIndex * 100;

    // Apply the transform to the slides container
    document.querySelector('.slides').style.transform = `translateX(${translateXValue}%)`;

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to the current dot
    dots[slideIndex].classList.add('active');

    // Increment slideIndex, reset if it's the last slide
    slideIndex = (slideIndex + 1) % slides.length;

    // Call showSlides again after 3 seconds
    setTimeout(showSlides, 3000);
}

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

// Initial call to start slideshow
showSlides();
