let count = 10;
const cronometer = document.getElementById('countdown')

window.onload = () => {
  cronometer.innerText = `${count} segundo(s)`;
}

const setCountdown = () => {
  cronometer.innerText = `${count} segundo(s)`;

  if(count <= 0) {
    clearInterval(startCounter)   //INFINTE LOOPING!!
    cronometer.innerText = 'Your time is over. Try again!';
    console.log(count);
  } else {
    count = count-1;
  }
}

const startCounter = () => {
  setInterval(setCountdown, 1000)
  count = count-1;
}


const resetCounter = () => {
  count = 10;
}