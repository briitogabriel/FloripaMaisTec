const { add, subtract, multiply, divide } = require('./functions2')

describe('Validações Matemáticas de 4 operações', () => {
  test('expect to be greater than 10', () => {
    expect(add(8, 3)).toBeGreaterThan(10);
    expect(subtract(15, 4)).toBeGreaterThan(10);
    expect(multiply(2, 6)).toBeGreaterThan(10);
    expect(divide(40, 2)).toBeGreaterThan(10);
  })

  test('expect to be greater than or equals to 10', () => {
    expect(add(8, 2)).toBeGreaterThanOrEqual(10);
    expect(subtract(15, 5)).toBeGreaterThanOrEqual(10);
    expect(multiply(2, 5)).toBeGreaterThanOrEqual(10);
    expect(divide(20, 2)).toBeGreaterThanOrEqual(10);
  })

  test('expect to be less than 10', () => {
    expect(add(5, 2)).toBeLessThan(10);
    expect(subtract(11, 5)).toBeLessThan(10);
    expect(multiply(2, 3)).toBeLessThan(10);
    expect(divide(10, 2)).toBeLessThan(10);
  })

  test('expect to be less than or equals to 10', () => {
    expect(add(8, 2)).toBeLessThanOrEqual(10);
    expect(subtract(15, 5)).toBeLessThanOrEqual(10);
    expect(multiply(2, 5)).toBeLessThanOrEqual(10);
    expect(divide(20, 2)).toBeLessThanOrEqual(10);
  })

  test('expect to be zero', () => {
    expect(add(-8, 8)).toBe(0);
    expect(subtract(7, 7)).toBe(0);
    expect(multiply(234, 0)).toBe(0);
    expect(divide(0, 432)).toBe(0);
  })

  test('expect to be equals to 4', () => {
    expect(add(-4, 8)).toEqual(4);
    expect(subtract(7, 3)).toEqual(4);
    expect(multiply(2, 2)).toEqual(4);
    expect(divide(40, 10)).toEqual(4);
  })

  test('expect to throw error', () => {
    expect(() => divide(40, 0)).toThrow();
  })
});