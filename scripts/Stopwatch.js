// import ImagePuzzle from './ImagePuzzle.js';
//
// // MainBlock.onload = function () {
//
//     let seconds = '00';
//     let tens = '00';
//     let appendTens = document.getElementById("tens");
//     let appendSeconds = document.getElementById("seconds");
//     let buttonStart = document.querySelector('.start-btn');
//     let buttonStop = document.getElementById('button-stop');
//     let Interval;
//
//     buttonStart.onclick = function () {
//
//         clearInterval(Interval);
//         Interval = setInterval(startTimer, 10);
//     };
//
//     imagePuzzle.onFinished = function() {
//         buttonStop.onclick = function () {
//             clearInterval(Interval);
//         };
//     };
//
//
//     function startTimer() {
//         tens++;
//         if (tens < 9) {
//             appendTens.innerHTML = "0" + tens;
//         }
//         if (tens > 9) {
//             appendTens.innerHTML = tens;
//         }
//         if (tens > 99) {
//             console.log("seconds");
//             seconds++;
//             appendSeconds.innerHTML = "0" + seconds;
//             tens = 0;
//             appendTens.innerHTML = "0" + 0;
//         }
//         if (seconds > 9) {
//             appendSeconds.innerHTML = seconds;
//         }
//     }
// // };