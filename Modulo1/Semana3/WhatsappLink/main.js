import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <form id="form">
      <input id="phone" type="text" placeholder="Type the destination number">
      <input id="message" type="text" placeholder="Write your message here">
      <button id="sendMessage">Send Message</button>
    </form>
  </div>
`


const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const form = document.getElementById('form');

phoneInput.addEventListener('input', function (e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,5})(\d{0,4})/);
  
  e.target.value = 
    !x[2] ? x[1] : '+' + x[1] + ' ' +
    (!x[3] ? x[2] : '(' + x[2] + ') ') +
    x[3] +
    (x[4] ? '-' + x[4] : '');
});

form.addEventListener('submit', function(e) {
  let phoneNumber = phoneInput.value.replace(/\D/g, '');
  let message = messageInput.value.replace(' ','%20');
  
  window.open(`http://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
});