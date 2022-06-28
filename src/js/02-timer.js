import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import '../css/common.css';
import 'flatpickr/dist/flatpickr.min.css';

const userDateEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpanEl = document.querySelector('span[data-days]');
const hoursSpanEl = document.querySelector('span[data-hours]');
const minutesSpanEl = document.querySelector('span[data-minutes]');
const secondsSpanEl = document.querySelector('span[data-seconds]');
startBtn.disabled = true;
let userData;
// console.log(userData);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(userData);
    userData = selectedDates[0];
    console.log(userData);
    if (userData > Date.now()) {
      startBtn.disabled = false;
      // userDateEl.disabled = true;
    } else {
      alert('Please choose a date in the future');
    }
  },
};

flatpickr(userDateEl, options);

console.log(userData);
startBtn.addEventListener('click', startTimer);

function startTimer() {
  console.log(userData);

  if (userData > Date.now()) {
    setInterval(() => {
      const startTime = convertMs(userData - Date.now());
      daysSpanEl.textContent = startTime.days;
      hoursSpanEl.textContent = startTime.hours;
      minutesSpanEl.textContent = startTime.minutes;
      secondsSpanEl.textContent = startTime.seconds;
    }, 1000);
    startBtn.disabled = true;
    userDateEl.disabled = true;
  } else {
    clearInterval();
    startBtn.disabled = true;
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
