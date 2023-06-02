// 2nd math test

describe('Math module with Math Object', () => {
    describe('sqrt', () => {
      test('calculates the square root correctly', () => {
        expect(Math.sqrt(25)).toBe(5);
      });
    });
  
    describe('max', () => {
      test('finds the maximum correctly', () => {
        expect(Math.max(4, 7)).toBe(7);
      });
    });
  });