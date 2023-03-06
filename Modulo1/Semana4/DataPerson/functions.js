class Person {
  personName;
  age;
  height;

  constructor(personName, age, height) {
    this.personName = personName;
    this.age = age;
    this.height = height;
  }

  printMessage(personName, age, height) {
    this.personName = personName;
    this.age = age;
    this.height = height;
    return `Hello, my name is ${this.personName}, I am ${this.age} years old and ${this.height}m tall.`// de altura e sou ${profissao}.`
  }
}

const newPerson = new Person();

const handleDataPerson = () => {
  let nameInput = prompt(`Hi! What's your name?`);
  let ageInput = prompt(`What's your age?`);
  let heightInput = prompt(`How tall are you (meters)?`);

  const messageReturn = newPerson.printMessage(nameInput, ageInput, heightInput);
  setPrintedMessage(messageReturn);
}


class PersonOccupancy extends Person {
  occupancy;

  constructor(personName, age, height, occupancy) {
    super(personName, age, height);
    this.occupancy = occupancy;
  }

  printMessage(personName, age, height, occupancy) {
    this.personName = personName;
    this.age = age;
    this.height = height;
    this.occupancy = occupancy;
    return `Hello, my name is ${this.personName}, I am ${this.age} years old, ${this.height}m tall and I'm a ${this.occupancy}.`
  }
}

const newPersonOccupancy = new PersonOccupancy();

const handleOccupancy = () => {
  let nameInput = prompt(`Hi! What's your name?`);
  let ageInput = prompt(`What's your age?`);
  let heightInput = prompt(`How tall are you (meters)?`);
  let occupancyInput = prompt(`What do you do for living?`);

  const messageReturn = newPersonOccupancy.printMessage(nameInput, ageInput, heightInput, occupancyInput);
  setPrintedMessage(messageReturn);
}



const textedRendered = document.getElementById('printedMessage')

const setPrintedMessage = (messageReturn) => {
  textedRendered.innerHTML = `${messageReturn}`
}