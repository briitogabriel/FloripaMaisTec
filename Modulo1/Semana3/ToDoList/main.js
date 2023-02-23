import './style.css'

const uncheckedBox = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>
`;
const checkedBox = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg>
`;
const editIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
`;

document.querySelector('#app').innerHTML = `
  <div>
    <h1>To Do List App</h1>
    <ul id="toDos"></ul>
    <button id="addNew" onClick={handleAddNew()}>Add New Item</button>
  </div>
`

const toDoList = [];
const toDos = document.getElementById('toDos');

window.handleAddNew = () => {

  const item = window.prompt('Enter a To Do Item:');
  let newItem = {
    item,
    checked: false,
    id: Date.now()
  };
  toDoList.push(newItem);

  const toDoCurrentItem = document.createElement('li');

  toDoList.forEach(toDoItem => {

    toDoCurrentItem.innerHTML =
      `
      <div id="${toDoItem.id}">
        <button id="done-${toDoItem.id}" class="list" onClick={handleDone(${toDoItem.id})}>
          ${toDoItem.checked ? checkedBox : uncheckedBox}
        </button>
        <button id="edit-${toDoItem.id}" class="list" onClick={handleEdit(${toDoItem.id})}>
          ${editIcon}
        </button>
        <p>${toDoItem.item}</p>
      </div>
      `;

    toDos.appendChild(toDoCurrentItem);
  });
}

window.handleEdit = (btn_id) => {
  const toDoEditing = document.getElementById(btn_id.toString());
  const editItem = toDoList.filter(toDoEditItem => (toDoEditItem.id == btn_id))[0];

  editItem.item = window.prompt('Enter the new To Do item:');
  toDoEditing.innerHTML = 
    `
    <button id="done-${editItem.id}" class="list" onClick={handleDone(${editItem.id})}>
      ${editItem.checked ? checkedBox : uncheckedBox}
    </button>
    <button id="edit-${editItem.id}" class="list" onClick={handleEdit(${editItem.id})}>
      ${editIcon}
    </button>
    <p>${editItem.checked ? `<s>${editItem.item}</s>` : editItem.item}</p>
    `;
}

window.handleDone = (btn_id) => {
  const toDoChecking = document.getElementById(btn_id.toString());
  const editItem = toDoList.filter(toDoEditItem => (toDoEditItem.id == btn_id))[0];

  editItem.checked = !editItem.checked;
  toDoChecking.innerHTML = 
    `
    <button id="done-${editItem.id}" class="list" onClick={handleDone(${editItem.id})}>
      ${editItem.checked ? checkedBox : uncheckedBox}
    </button>
    <button id="edit-${editItem.id}" class="list" onClick={handleEdit(${editItem.id})}>
      ${editIcon}
    </button>
    <p>${editItem.checked ? `<s>${editItem.item}</s>` : editItem.item}</p>
    `;
}