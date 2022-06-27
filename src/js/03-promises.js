function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  } else {
    // Reject
  }
}

const promise = new Promise();
