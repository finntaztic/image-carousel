import "./styles.css";

const slides = document.querySelectorAll('.box img');
let imgIndex = 0; // start from the first image

showImage(imgIndex);

function showImage(index) {
    // Hide all images
    slides.forEach(img => img.style.display = 'none');

    // Make sure the index is within bounds
    if (index >= 0 && index < slides.length) {
        slides[index].style.display = 'block';
    } else {
        console.log(`Index ${index} is out of bounds.`);
    }
}

const prevBtn = document.querySelector('.prev');

prevBtn.addEventListener('click', () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = slides.length - 1; // loop to last image if you want circular navigation
    }
    showImage(imgIndex);
});


const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', () => {
    imgIndex++;
    if (imgIndex >= slides.length) {
        imgIndex = 0; // loop back to first image
    }
    showImage(imgIndex);
});
