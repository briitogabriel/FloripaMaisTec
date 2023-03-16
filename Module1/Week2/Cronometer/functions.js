const cronometer = document.getElementById('countdown')

window.onload = () => {
  let count = null;
  resetCounter();
  // cronometer.innerText = 'Click to start counting';
}

var interval = null;

const setCountdown = () => {
  cronometer.innerText = `${count} second${count == 1 ? '' : 's'} left`;

  if(count <= 0) {
    clearInterval(interval);
    interval = 0;
    cronometer.innerText = 'Your time is over. Try again!';
  } else {
    count = count-1;
  }
}

const startCounter = () => {
  setCountdown();
  interval = setInterval(setCountdown, 1000);
}

const resetCounter = () => {
  count = 10;
  cronometer.innerText = 'Click to start counting';
  clearInterval(interval);
  interval = 0;
}