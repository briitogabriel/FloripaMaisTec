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

// {
//   "login": "briitogabriel",
//   "id": 71029907,
//   "node_id": "MDQ6VXNlcjcxMDI5OTA3",
//   "avatar_url": "https://avatars.githubusercontent.com/u/71029907?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/briitogabriel",
//   "html_url": "https://github.com/briitogabriel",
//   "followers_url": "https://api.github.com/users/briitogabriel/followers",
//   "following_url": "https://api.github.com/users/briitogabriel/following{/other_user}",
//   "gists_url": "https://api.github.com/users/briitogabriel/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/briitogabriel/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/briitogabriel/subscriptions",
//   "organizations_url": "https://api.github.com/users/briitogabriel/orgs",
//   "repos_url": "https://api.github.com/users/briitogabriel/repos",
//   "events_url": "https://api.github.com/users/briitogabriel/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/briitogabriel/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Gabriel Brito Araújo",
//   "company": null,
//   "blog": "https://www.linkedin.com/in/brittogabriel/",
//   "location": "Florianópolis",
//   "email": null,
//   "hireable": true,
//   "bio": "Developer and Civil Engineer. Curious and directional thinking, I like to contribute to a nice and productive environment with my abilities.",
//   "twitter_username": null,
//   "public_repos": 20,
//   "public_gists": 0,
//   "followers": 8,
//   "following": 3,
//   "created_at": "2020-09-09T16:11:21Z",
//   "updated_at": "2022-10-18T14:02:42Z"
// }