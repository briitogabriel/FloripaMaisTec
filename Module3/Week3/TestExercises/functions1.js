const addNumbers = (a, b) => a + b
const minus = (a, b) => a - b
const multiply = (a, b) => a * b
const divisionRest = (a, b) => a % b
const infinityDivision = () => 1 / 0
const returnLessThanZero = () => 10 - 30
const returnBigNumber = () => 50000 * 5000
const isNotANumber = (input) => isNaN(input)
  ? NaN
  : input

module.exports = {
  addNumbers,
  minus,
  multiply,
  divisionRest,
  infinityDivision,
  returnLessThanZero,
  returnBigNumber,
  isNotANumber
}