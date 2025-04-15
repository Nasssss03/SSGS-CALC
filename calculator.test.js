const calculator = require('./calculator');

// Test addizione
test('should correctly add two numbers, () => {
  expect(calculator.addition(2, 3)).toBe(5); // Normal case
  expect(calculator.addition(-1, 1)).toBe(0); // Edge case: negative + positive
  expect(calculator.addition(0, 0)).toBe(0); // Edge case: zero + zero
});

// Test sottrazione
test('should correctly subtract two numbers, () => {
  expect(calculator.sottrazione(5, 3)).toBe(2); // Normal case
  expect(calculator.sottrazione(0, 0)).toBe(0); // Edge case: zero - zero
  expect(calculator.sottrazione(-1, -1)).toBe(0); // Edge case: negative - negative
});

// Test moltiplicazione
test('should correctly multiply two numbers, () => {
  expect(calculator.multiplication(2, 3)).toBe(6); // Normal case
  expect(calculator.multiplication(0, 5)).toBe(0); // Edge case: multiply by zero
  expect(calculator.multiplication(-2, 3)).toBe(-6); // Edge case: negative * positive
});

// Test divisione
test('should correctly divide two numbers, () => {
  expect(calculator.division(10, 2)).toBe(5); // Normal case
  expect(calculator.divisione(-10, 2)).toBe(-5); // Edge case: negative / positive
});

test.skip('should throw an error when dividing by zero', () => {
  expect(() => calculator.divisione(10, 0)).toThrow("Impossibile dividere per zero."); // Error handling
});
