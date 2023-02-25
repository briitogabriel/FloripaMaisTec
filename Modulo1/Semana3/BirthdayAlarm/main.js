import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h2>
      Select the Birthday Date:
    </h2>
    <input id="input" type="date" />
    <p id="daysLeftText"></p>
  </div>
`

const dateNow = new Date();
let birthday = '';
const input = document.getElementById('input')
const daysLeftText = document.getElementById('daysLeftText')

input.addEventListener('input', (e) => {
  birthday = e.target.value;
  const diffInMs = new Date(birthday) - new Date(dateNow)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const daysLeft = Math.ceil(diffInDays+1)

  if (daysLeft > 0) {
    daysLeftText.innerText = `${daysLeft.toString()} ${daysLeft > 1 ? 'days' : 'day'} until your birthday.`
  } else if(daysLeft == 0) {
    daysLeftText.innerText = 'Happy Birthday!'
  } else {
    daysLeftText.innerText = `You birthday was ${-daysLeft.toString()} ${daysLeft > 1 ? 'days' : 'day'} ago.`
  };
})
