import Puzzle from './Puzzle.js';

const imagePuzzle = new Puzzle(
    document.querySelectorAll('#puzzle-wrapper > div')[0],
    './images/db98abf8-231d-417f-8851-ce3a24233c6b.jpg',
    600
);
// const picturePuzzle2 = new Puzzle(
//     document.querySelectorAll('#puzzle-wrapper > div')[1],
//     'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117',
//     600,
//     4
// );

imagePuzzle.onSwap = function(movements){
    console.log(movements);
};

// const modal = document.querySelector('#success-modal');
// modal.style.display = 'block';
//
// imagePuzzle.onFinished = function() {
//     console.log("Show good job dialog");
//
//     setTimeout(() => {
//         modal.classList.add('open');
//         this.el.classList.add('blur-it')
//     }, 500);
//     modal.querySelector('.trigger').onclick = () => {
//         modal.classList.remove('open');
//         this.el.classList.remove('blur-it');
//     }
//
// };
