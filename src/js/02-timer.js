import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import '../css/common.css';
import 'flatpickr/dist/flatpickr.min.css';

// const targetDate = targetDate;
const userDateEl = document.querySelector('input#datetime-picker');
console.log(userDateEl);
userDateEl.addEventListener('input', updateTimer);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(userDateEl, options);
console.log(flatpickr);

function updateTimer() {
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}
