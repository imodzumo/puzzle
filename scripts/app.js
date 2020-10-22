import ImagePuzzle from './ImagePuzzle.js';

const imagePuzzle = new ImagePuzzle(
    document.querySelectorAll('#puzzle-wrapper')[0],
    'images/image_1.jpg',
    // 'https://i.infocar.ua/i/12/5713/700x350.jpg',
    500
);


imagePuzzle.onSwap = function(movements){
    console.log(movements);
};

// Modal success wrapper
const modal = document.querySelector('#main-success-block');
modal.style.display = 'block';

imagePuzzle.onFinished = function() {
    setTimeout(() => {
        modal.classList.add('open');
        modal.querySelector('.curtain').classList.remove('hidden');
    }, 500);
    modal.querySelector('.btn-close').onclick = () => {
        modal.classList.remove('open');
        this.el.classList.remove('curtain');
        modal.querySelector('.curtain').classList.add('hidden');
    }
};

// Preview image
const image = document.querySelector('.preview-image');

document.querySelector('.btn-show-image').onclick = () => {
    image.classList.remove('hidden');
};
document.querySelector('.btn-close').onclick = () => {
    image.classList.add('hidden');
};