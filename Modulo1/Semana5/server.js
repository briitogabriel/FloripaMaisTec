// const path = require('path')      //OUTRA MANEIRA DE IMPORTAR BIBLIOTECAS NODE: import path from 'path'

console.log(`------------- Exercise 01 --------------`);

const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];
const distinctList = [];
let duplicate = '';

list.forEach(item => {
  if(distinctList.includes(item)) {
    duplicate = duplicate + `${item}, `;
  } else {
    distinctList.push(item)
  }
})

console.log(`Original Array: [${list}]`);
console.log(`Duplicated: ${duplicate}\nDistinct Array: [${distinctList}]`);