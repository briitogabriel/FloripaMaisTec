const loginData = {
  username: 'Gabriel',
  password: 'floripa'
};

window.onload = () => {
  localStorage.setItem('DBstorage', JSON.stringify(loginData))
}

const username = document.getElementById('username');
const password = document.getElementById('password');

const logoutText = document.getElementById('loggedMsg');

const formLogin = document.querySelector('#formLogin');
const formLogout = document.querySelector('#formLogout');

if (formLogin) {
  formLogin.addEventListener('submit', event => {
    event.preventDefault();
    login();
  })
};

const login = () => {
  let DBlogin = JSON.parse(localStorage.getItem('DBstorage'))
  if (username.value == DBlogin.username && password.value == DBlogin.password) {
    alert(`User "${username.value}" logged.`)
    location.href = './logged.html'
  } else if (username.value == DBlogin.username && password.value !== DBlogin.password) {
    alert('Incorret password.')
  } else {
    alert(`User "${username.value}" doesn't exists.`)
  }
}

if (logoutText){
  let DBlogin = JSON.parse(localStorage.getItem('DBstorage'))
  logoutText.innerText = `Logged in as ${DBlogin.username}.`;
}

if (formLogout) {
  formLogout.addEventListener('submit', event => {
    event.preventDefault();
    logout();
  })
};

const logout = () => {
  let DBlogin = JSON.parse(localStorage.getItem('DBstorage'))
  location.href = './loginStart.html'
  alert(`User "${DBlogin.username}" disconnected.`)
}