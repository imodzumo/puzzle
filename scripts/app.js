import ImagePuzzle from './ImagePuzzle.js';

const imagePuzzle = new ImagePuzzle(
    document.querySelectorAll('#puzzle-wrapper')[0],
    'images/image_1.jpg',
    500
);














// const picturePuzzle2 = new Puzzle(
//     document.querySelectorAll('#puzzle-wrapper > div')[1],
//     'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117',
//     600,
//     4
// );

// imagePuzzle.onSwap = function(movements){
//     console.log(movements);
// };

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
