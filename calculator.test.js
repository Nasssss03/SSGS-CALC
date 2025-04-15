const calculator = require('./calculator');

// Passing Test: Addizione (2 + 2 = 4)
test('should correctly add two numbers', () => {
  const result = calculator.addizione(2, 2);
  expect(result).toBe(4); // Assertion: Result should be 4
});

// Ignored Test: Addizione (3 + 5 ≠ 7)
test.skip('should fail when adding two numbers incorrectly', () => {
  const result = calculator.addizione(3, 5);
  expect(result).toBe(7); // This will fail because 3 + 5 = 8
});
