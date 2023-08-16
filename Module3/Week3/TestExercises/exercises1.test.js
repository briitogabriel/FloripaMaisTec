const { addNumbers, minus, multiply, divisionRest, infinityDivision, returnLessThanZero, returnBigNumber, isNotANumber } = require('./functions1')

describe('Funções Metemáticas', () => {
  test('Adds two numbers correctly', () => {
    expect(addNumbers(2, 3)).toBe(5)
  });

  test('Subtraia dois números onde o resultado não seja 5', () => {
    // expect(/*func*/).toBeTruthy()
    expect(minus(6, 2)).not.toBe(5)
  });

  test('Multiplique corretamente onde o resultado seja 50', () => {
    expect(multiply(5, 10)).toBe(50)
  });

  test('Divida dois números corretamente onde a sobra seja 12', () => {
    expect(divisionRest(52, 20)).toBe(12)
  });

  test('Faça uma divisão aonde o resultado seja infinito', () => {
    expect(infinityDivision()).toBe(Infinity)
  });

  test('O resultado da função deve ser menor do que zero', () => {
    expect(returnLessThanZero()).toBeLessThan(0)
  });

  test('Lida com números grandes', () => {
    expect(returnBigNumber()).toBeGreaterThan(1000000)
  });

  test('Lida com subtração negativa', () => {
    expect(minus(1, 10)).toEqual(-9)
  });

  test('Utilizado duas funções faça a multiplicação', () => {
    expect(multiply(addNumbers(1, 4), minus(8, 3))).toBe(25)
  });

  test('Expera um resultado não numérico', () => {
    expect(isNotANumber('gab')).toBe(NaN)
  });
});
