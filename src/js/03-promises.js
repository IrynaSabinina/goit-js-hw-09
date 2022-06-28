import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');

// const delayEl = document.querySelector('[name="delay"]');
// const stepEl = document.querySelector('[name="step"]');
// const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);
  evt.currentTarget.reset();

  for (
    let position = 1, delayNew = delayEl;
    position <= amountEl;
    position += 1, delayNew += stepEl
  ) {
    setTimeout(() => {
      createPromise(position, delayNew)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delayNew);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay }); // Reject
    }
  });
}
