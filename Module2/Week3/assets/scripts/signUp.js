// window.onload = document.getElementById('form').addEventListener('submit', login());

const signIn = (e) => {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
   
  console.log(`E-mail: ${email} // Password: ${password}`);

  document.getElementById('form').reset();
}

let formData = document.getElementById('form');
formData.addEventListener('submit', signIn);