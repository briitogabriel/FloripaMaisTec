// window.onload = document.getElementById('form').addEventListener('submit', login());

function signIn(e) {
  e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
   
  console.log(`E-mail: ${email} // Password: ${password}`);

  document.getElementById('form').reset();
}
