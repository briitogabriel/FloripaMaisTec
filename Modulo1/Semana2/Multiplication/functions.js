
const table = document.getElementById('table')

const calculate = () => {

  const number = document.getElementById('number').value
  
  if (Number(number) === parseInt(number, 10)) {
    table.innerHTML = `${number} multiplication table:`;

    for (let i = 1; i <= 10; i++) {
      let li = document.createElement('li');
      result = i * Number(number);
      li.innerText = `${number} x ${i} = ${result}`;
      table.appendChild(li)
    }
  } else {
    table.innerHTML = `"${number}" is not a integer number`;
  }
}