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
let timerId = null;
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0].getTime());
    if (selectedDates[0].getTime() > Date.now()) {
      setInterval(() => {
        startBtn.disabled = false;
        const startTime = convertMs(selectedDates[0] - Date.now());

        daysSpanEl.textContent = startTime.days;
        hoursSpanEl.textContent = startTime.hours;
        minutesSpanEl.textContent = startTime.minutes;
        secondsSpanEl.textContent = startTime.seconds;
      }, 1000);
      return (startBtn.disabled = false);
    } else {
      userDateEl.textContent = String('00');
      daysSpanEl.textContent = String('00');
      hoursSpanEl.textContent = String('00');
      minutesSpanEl.textContent = String('00');
      secondsSpanEl.textContent = String('00');
      alert('Please choose a date in the future');
      startBtn.disabled = true;
      return clearInterval();
    }
  },
};

flatpickr(userDateEl, options);

// function timerStart(options) {
//   setInterval(() => {}, 1000);
// }

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(flatpickr => {
//     daysSpanEl.textContent = startTime.days.currentTarget;
//     hoursSpanEl.textContent = startTime.hours;
//     minutesSpanEl.textContent = startTime.minutes;
//     secondsSpanEl.textContent = startTime.seconds;
//   }, 1000);
// });

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

// //     secondsSpanEl.textContent = components.seconds;
// //   const currentTime = Date.now();
// //   //   const different = userTime - currentTime;
// //   const userTime = convertMs(
// //     options.defaultDate.getTime() - currentTime.getTime()
// //   );
// //   daysSpanEl.textContent = userTime.days;
// //   setInterval(() => {
// //     // const currentTime = Date.now();
// //     // const different = userTime - currentTime;
// //     // console.log(different);

// //     const components = convertMs(different);
// //     // daysSpanEl.textContent = components.days;
// //     hoursSpanEl.textContent = components.hours;
// //     minutesSpanEl.textContent = components.minutes;
// //     secondsSpanEl.textContent = components.seconds;
// //     console.log(components);
