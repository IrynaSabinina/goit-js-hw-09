import throttle from 'lodash.throttle';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stoptBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', changeBodyColor);
stoptBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.classList.remove('disabled');
});

function changeBodyColor() {
  startBtn.classList.add('disabled');
  timerId = setInterval(() => {
    let colornew = getRandomHexColor();
    bodyEl.style.backgroundColor = colornew;
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
