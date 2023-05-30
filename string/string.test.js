// math.test.js
const math = require('./string');

describe('Math module', () => {
  describe('add', () => {
    test('adds two numbers correctly', () => {
      expect(math.add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers correctly', () => {
      expect(math.subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers correctly', () => {
      expect(math.multiply(2, 3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(math.divide(6, 3)).toBe(2);
    });
  });
});