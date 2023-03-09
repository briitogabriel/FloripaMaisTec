// NOTAS: const path = require('path')      //OUTRA MANEIRA DE IMPORTAR BIBLIOTECAS NODE: import path from 'path'

const readline = require('readline-sync');  // -> GET USER INPUTS IN ALL EXERCISES


let exerciseOption = readline.question(`\nWhat exercise number would you like to run? (press 'N' to quit)\n`);

do {
  switch (parseInt(exerciseOption)){
    case 1:
      console.log(`\n------------- Exercise 01 - DELETE DUPLICATED --------------`);
      // Find duplicated registers, remove from original list and print the duplicated found + new list (distinct)

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
      break;


    case 2:
      console.log(`\n------------- Exercise 02 - ARRAY ORDERING --------------`);
      // Expected: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ]

      const users = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
      const fruits = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja'];
      const orderedArray = [];

      for (let i = 0; i < users.length; i++) {
        orderedArray.push(` ${users[i]} - ${fruits[users.length - (i+1)]}`);  
      }

      console.log(`Users Array: [${users}]`);
      console.log(`Fruits Array: [${fruits}]`);
      console.log(`Ordered combined Array: [${orderedArray}]`);
      break;


    case 3:
      console.log(`\n------------- Exercise 03 - ADD NEW USERS --------------`);
      // Get new names in prompt, add to the original array validating if it already exists and if it's String

      const names03 = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
      let addNew = true;
      let newName = '';

      console.log(`Original Users list: [${names03}]`);

      do {
        newName = readline.question(`Inform a new user name to Add into the Users list:\n`)

        if (isNaN(parseFloat(newName))) {
          
          if (names03.includes(newName)) {
            console.log(`${newName} is already on the Users list. Please inform a valid user name.`);
            continue

          } else {
            names03.push(newName);
            console.log(`New Users list: [${names03}]`);
          
            question = readline.question(`Do you want to add new names to the list? ('N' to quit or press 'ENTER' to continue)\n`)
            question.toUpperCase() === 'N' ? addNew = false : addNew = true
            continue
          }
        } else { console.log(`${newName} is not a String. Please inform a valid user name.`); }

      } while (addNew === true)
      break;


    case 4:
      console.log(`\n------------- Exercise 04 - FILTERED USERS --------------`);
      // Return user in 2 new lists: < 18 // => 18

      const userList04 = [
        {nome: "luis", idade: 26},
        {nome: "norma", idade: 16},
        {nome: "daiana", idade: 26},
        {nome: "jorge", idade: 16},
        {nome: "kauan", idade: 16},
        {nome: "charles", idade: 26},
        {nome: "marco", idade: 16},
        {nome: "bruno", idade: 16}
      ]

      const under18 = [];
      const equalAbove18 = [];

      userList04.map(user => {
        user.idade < 18 ? under18.push(JSON.stringify(user)) : equalAbove18.push(JSON.stringify(user))
      });

      console.log(`Users with age under 18 years: ${under18} \n Users with age equal or above 18 years: ${equalAbove18}`)
      break;

    default: console.log('Exercise not found.')
  }

  exerciseOption = readline.question(`\nWhat exercise number would you like to run now? (press 'N' to quit)\n`)
} while (exerciseOption.toUpperCase() !== 'N')