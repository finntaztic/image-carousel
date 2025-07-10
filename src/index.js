import "./styles.css";

const prevBtn = document.querySelector('.prev');
console.log(prevBtn);

// prevBtn.addEventListener ('click', () => {
//     console.log('hello');
//     const box = document.querySelector('.box');

// });

let image = 0;
showImage(image);

function showImage (n){
    let images = document.getElementsByTagName('img');
    console.log(images);
}