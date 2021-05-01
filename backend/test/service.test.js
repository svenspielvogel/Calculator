const service = require('../src/service')

test('adds 1 + 2 to equal 3', () => {
    expect(service.add(1, 2)).toBe(3);
});

test('substracts 3 - 2 to equal 1', () => {
    expect(service.subtract(3, 2)).toBe(1);
});

test('multiplies 2 * 2 to equal 4', () => {
    expect(service.multiply(2, 2)).toBe(4);
});

test('divides 6 / 3 to equal 2', () => {
    expect(service.divide(6, 3)).toBe(2);
});