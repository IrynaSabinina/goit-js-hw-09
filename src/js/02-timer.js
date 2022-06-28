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
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startBtn.disabled = false;

    if (selectedDates[0].getTime() > Date.now()) {
      setInterval(() => {
        const startTime = convertMs(selectedDates[0] - Date.now());
        daysSpanEl.textContent = startTime.days;
        hoursSpanEl.textContent = startTime.hours;
        minutesSpanEl.textContent = startTime.minutes;
        secondsSpanEl.textContent = startTime.seconds;
      }, 1000);
      return (startBtn.disabled = false);
    } else {
      userDateEl.disabled = true;
      alert('Please choose a date in the future');
      clearInterval();
      startBtn.disabled = true;
      return;
    }
  },
};

flatpickr(userDateEl, options);

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
