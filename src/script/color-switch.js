const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function setBodyColor() {
    randomColor = colors[randomIntegerFromInterval(1, colors.length - 1)];
    document.body.style.backgroundColor = randomColor;
}
let timerId = null;

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    startBtn.disabled = true;
    timerId = setInterval(() => { setBodyColor() }, 1000);
}
function onStopBtnClick() {
    startBtn.disabled = false;
    clearInterval(timerId);
}