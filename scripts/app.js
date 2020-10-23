import ImagePuzzle from './ImagePuzzle.js';

const imagePuzzle = new ImagePuzzle(
    document.querySelectorAll('#puzzle-wrapper')[0],
    'images/image_1.jpg',
    // 'https://i.infocar.ua/i/12/5713/700x350.jpg',
    500
);


// Modal success wrapper
const modal = document.querySelector('#main-success-block');

imagePuzzle.onFinished = function() {
    setTimeout(() => {
        modal.classList.add('open');
        modal.querySelector('.curtain').classList.remove('hidden');
        document.querySelector('.btn-close').classList.remove('hidden');
        clearInterval(Interval);
    }, 500);
    modal.querySelector('.btn-close').onclick = () => {
        modal.classList.remove('open');
        this.el.classList.remove('curtain');
        modal.querySelector('.curtain').classList.add('hidden');
        document.querySelector('.btn-close').classList.add('hidden');
    }
};

// Preview image
const image = document.querySelector('.preview-image');

document.querySelector('.btn-show-image').onclick = () => {
    image.classList.remove('hidden');
    document.querySelector('.btn-close-image').classList.remove('hidden');
};
document.querySelector('.btn-close-image').onclick = () => {
    image.classList.add('hidden');
    document.querySelector('.btn-close-image').classList.add('hidden');
};

// Start button + StopWatch

const main = document.querySelector('.main');

let minutes = '00';
let seconds = '00';
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let Interval;

document.querySelector('.start-btn').onclick = () => {
    main.classList.remove('hidden');
    document.querySelector('.start-btn-wrapper').classList.add('hidden');

    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
    function startTimer() {
        seconds++;

        if (seconds < 60) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 60) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 60) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes < 60) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes > 60) {
            appendMinutes.innerHTML = minutes;
        }
    }
};