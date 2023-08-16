
const { add, minus, throwError } = require('./math');
const { myEmail, goShopping, pastel, megasenaNumbers, something, checkSkyColor, array } = require('./random');

test('adds 1 + 2 to equal 3', () => {
expect(add(1, 2)).toBe(3);
});

test('minus 5 - 2 to equal 3', () => {
expect(minus(5, 2)).toBe(3);
});

test('email needs to be on correct format', () => {
  expect(myEmail).toMatch(/^\w+@\w+\.\w+$/)
})

test('shopping list to be as mom ordered', () => {
  expect(goShopping()).toEqual(['Ovos', 'Toddy', 'Vinagre'])
})

test('Did I eat pastel today?', () => {
  expect(pastel).toBeDefined()
})


test('What are the mega sena numbers?', () => {
  expect(megasenaNumbers).toBeUndefined();
})

test('Expect something to be null', () => {
  expect(something).toBeNull();
})

test('Is the sky blue?', () => {
  expect(checkSkyColor('blue')).toBeTruthy();
})

test('Is the sky red?', () => {
  expect(checkSkyColor('red')).toBeFalsy();
})

test('the array has the number 42', () => {
  expect(array).toContain(42);
})

test('the array has 3 elements', () => {
  expect(array).toHaveLength(3);
})

test('expect function throw something', () => {
  expect(() => throwError()).toThrow();
})

class MyClass {}
test('instance should be an instance of MyClass', () => {
  const instance = new MyClass();
  expect(instance).toBeInstanceOf(MyClass);
});

test('2 + 2 does not equal 5', () => {
  expect(2 + 2).not.toBe(5);
  });

  // (exercises.test.js):

  // Tests examples:
// https://colab.research.google.com/drive/11o0-FLhrIEwvW9LWkWQtzXAJQWqvdn0b?usp=sharing

// Basic math functions:
// https://colab.research.google.com/drive/1KIb8-p9NSNCJmMEB3ZQeAFivYDOdjbcf
// O objetivo é, criar quatro funções de testes onde elas utilizem este combinadores:
// expect().toBeGreaterThan();
// expect().toBeGreaterThanOrEqual();
// expect().toBeLessThan();
// expect().toBeLessThanOrEqual();
// expect().toBe();
// expect().toEqual(4);