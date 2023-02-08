const loginData = {
  username: 'Gabriel',
  password: 'floripa'
};

const username = document.getElementById('username');
const password = document.getElementById('password');

const checkLogin = () => {
  if (username.value == loginData.username && password.value == loginData.password) {
    alert(`User "${username.value}" logged in.`)
  } else if (username.value == loginData.username && password.value !== loginData.password) {
    alert('Incorret password.')
  } else {
    alert(`User "${username.value}" doesn't exists.`)
  }
}