let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let thumbnails = document.querySelectorAll('.thumbnails img');
let totalSlides = slides.length;
let autoSlideInterval;

// Function to show the slide at a specific index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('show');
        if (i === index) slide.classList.add('show');
    });
    updateActiveThumbnail(index);
    currentIndex = index;
}

// Update active thumbnail based on the current index
function updateActiveThumbnail(index) {
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.remove('active-thumbnail');
        if (i === index) thumbnail.classList.add('active-thumbnail');
    });
}

// Previous slide
function prevSlide() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

// Next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Auto-slide function
function autoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

// Show slide on thumbnail click
function currentSlide(index) {
    showSlide(index - 1);
}

// Detect swipe for mobile
let startX;
document.querySelector('.slider').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
document.querySelector('.slider').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) nextSlide();
    if (startX < endX - 50) prevSlide();
});

// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    autoSlide();
});
