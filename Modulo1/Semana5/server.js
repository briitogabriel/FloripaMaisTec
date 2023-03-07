// const path = require('path')      //OUTRA MANEIRA DE IMPORTAR BIBLIOTECAS NODE: import path from 'path'

console.log(`\n------------- Exercise 01 - DELETE DUPLICATED --------------`);

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



console.log(`\n------------- Exercise 02 - ARRAY ORDERING --------------`);

const users = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
const fruits = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja'];
const orderedArray = [];

// Expected: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ]

for (let i = 0; i < users.length; i++) {
  orderedArray.push(` ${users[i]} - ${fruits[users.length - (i+1)]}`);  
}

console.log(`Users Array: [${users}]`);
console.log(`Fruits Array: [${fruits}]`);
console.log(`Ordered combined Array: [${orderedArray}]`);