import './style.css';

const app = document.querySelector('#app');

const apiData = () =>{
  fetch('https://api.github.com/users/briitogabriel')
  .then((res) => res.json())
  .then((data) => {
    app.innerHTML = `
      <h1>GitHub Profile</h1>
      <div class="card">

        <div class="avatar">
          <img src="${data.avatar_url}" alt="image profile">
          <a href="${data.html_url}">@${data.login}</a>
          <h2>${data.name}</h2>
        </div>

        <div class="description">
          <p>Location: ${data.location}</p>
          <p>Bio: ${data.bio}</p>
          <a href="${data.blog}" alt="linkedin">Linkedin (click)</a>
          <p>Coding since: ${data.created_at.replaceAll('-', '/').substring(0,10)}</p>
        </div>

      </div>
    `
  })
}

window.onload = apiData();