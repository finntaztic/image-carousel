import "./styles.css";

// const slides = document.querySelectorAll('.box img');
// console.log(slides);
// const imgIndex = 1;

// showImage()
// function showImage (){
// //    const firstImg = slides[imgIndex].classList.add(displayImg);
//    const firstImg = slides[imgIndex];
//    console.log(firstImg);
//    firstImg.classList.add('displayImg');
//    console.log('hello')
// }


// document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.box img');
    console.log(slides);
    const imgIndex = 1; // Remember array indices are zero-based!

    showImage();
    function showImage() {
        const firstImg = slides[imgIndex];
        // Check if firstImg actually exists before trying to add a class
        if (firstImg) {
            console.log(firstImg);
            firstImg.style.display = 'block';
            // firstImg.classList.add('displayImg');
            console.log('hello');
        } else {
            console.log(`Error: Image at index ${imgIndex} not found.`);
        }
    }
// });