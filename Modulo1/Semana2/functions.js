const loginData = {
  username: 'Gabriel',
  password: 'floripa',
  urlProfile: 'https://floripamaistec.pmf.sc.gov.br/wp-content/uploads/sites/20/2022/07/curso_gratuitos_online.png',
  email: 'gabriel@floripamaistec.com'
};

window.onload = () => {
  localStorage.setItem('DBstorage', JSON.stringify(loginData))
}

const username = document.getElementById('username');
const password = document.getElementById('password');

const loggedArea = document.getElementById('loggedArea');
const loginText = document.getElementById('loggedMsg');
const email = document.getElementById('email');
const imageURL = document.getElementById('profileImage');

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

if (loginText){
  let DBlogin = JSON.parse(localStorage.getItem('DBstorage'))
  loginText.innerText = `Logged in as ${DBlogin.username}.`;
  email.innerText = `E-mail address ${DBlogin.email}.`;
  
  imageURL.src = DBlogin.urlProfile;
  
}

if (formLogout) {
  formLogout.addEventListener('submit', event => {
    event.preventDefault();
  })
};

const logout = () => {
  let DBlogin = JSON.parse(localStorage.getItem('DBstorage'))
  location.href = './loginStart.html'
  alert(`User "${DBlogin.username}" disconnected.`)
}


const changeName = () => {
  let newName = prompt('Enter the new login name');
  let DBupdate = JSON.parse(localStorage.getItem('DBstorage'))
  DBupdate.name = newName;
  localStorage.setItem('DBstorage', JSON.stringify(DBupdate))
  loginText.innerText = `Logged in as ${newName}.`;

  alert('Name updated with success!')
}

const changePassword = () => {
  let currentPassword = prompt('Enter the current password');
  let DBupdate = JSON.parse(localStorage.getItem('DBstorage'))
  if (DBupdate.password == currentPassword) {
    let newPassword = prompt('Enter the new password');
    DBupdate.password = newPassword
    localStorage.setItem('DBstorage', JSON.stringify(DBupdate))

    alert('Password updated with success!')

  } else {
    alert('Wrong password. Try again.')
    return;
  };
}

const changeEmail = () => {
  let newEmail = prompt('Enter the new e-mail');
  let DBupdate = JSON.parse(localStorage.getItem('DBstorage'))
  DBupdate.email = newEmail;
  localStorage.setItem('DBstorage', JSON.stringify(DBupdate))
  email.innerText = `E-mail address: ${newEmail}.`

  alert('E-mail updated with success!')
}

const changeImage = () => {
  let newImage = prompt('Enter the new image URL (full link)');
  let DBupdate = JSON.parse(localStorage.getItem('DBstorage'))
  DBupdate.urlProfile = newImage;
  localStorage.setItem('DBstorage', JSON.stringify(DBupdate))
  imageURL.src = newImage;

  alert('URL Image updated with success!')
}