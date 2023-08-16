 const add = (a, b) =>  a + b
 const minus = (a, b) =>  a - b

 const throwError = () => {throw new Error('Division by zero is not allowed');}
 
 module.exports = {
  add,
  minus,
  throwError
 }