import throttle from 'lodash.throttle';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stoptBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', changeBodyColor);
stoptBtn.addEventListener('click', () => {
  clearInterval(timerId);
  stoptBtn.disabled = true;
  startBtn.disabled = false;
});

function changeBodyColor() {
  startBtn.disabled = true;
  stoptBtn.disabled = false;
  timerId = setInterval(() => {
    let colornew = getRandomHexColor();
    bodyEl.style.backgroundColor = colornew;
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
