import './style.css';

const app = document.querySelector('#app');
let names = ''

const loadNames = () => {
  fetch('https://rickandmortyapi.com/api/character')
  .then((res) => res.json())
  .then((data) => {

    names = data.results.map((name) => (
      `<option value="${name.id}">${name.name}</option>`
    ))

    apiData()
  })
}

let idNumber = 1

const apiData = () => {
  fetch(`https://rickandmortyapi.com/api/character/${idNumber}`)
  .then((res) => res.json())
  .then((data) => {
    
    app.innerHTML = `
      <h1 class="glowing">Rick And Morty Card</h1>
      <label for="character"></label>
        <select name="character" id="character" onChange={handleIdChange()}>
          <option value="none" selected disabled hidden>Choose one character</option>
          ${names}
        </select>
      
      <div class="card">

        <div class="avatar">
          <h1>${data.name}</h1>
          <img src="${data.image}" alt="image profile">
          <h2>${data.species}${data.type ? '/'+data.type : ''}</h2>
        </div>

        <div class="description">
          <h3>ID - ${data.id}</h3>
          <p>Gender: ${data.gender}</p>
          <p>Location: ${data.location.name}</p>
          <p>Current status: ${data.status}</p>
        </div>

      </div>
    `
  })
}

window.handleIdChange = () => {
  idNumber = document.getElementById('character').value;
  apiData()
}


window.onload = loadNames();