/* eslint-disable no-undef */
const { capitalize, reverseString, calculator, ceaserCipher, analyzeArray } = require('.');

test("Capitalize 'goodbye' to 'Goodbye'", () => {
  expect(capitalize('goodbye')).toMatch('Goodbye');
});

test("Reverse 'alabama' to 'amabala", () => {
  expect(reverseString('alabama')).toMatch('amabala');
});

test("1 + 9 = 10", () => {
    expect(calculator.add(1, 9)).toEqual(10);
})

test("3 - 2 = 1", () => {
    expect(calculator.subtract(3,2)).toEqual(1);
})

test("10 / 2 = 5", () => {
    expect(calculator.divide(10,2)).toEqual(5);
})

test("60 * 4 = 240", () => {
    expect(calculator.multiply(60,4)).toEqual(240);
})

test("Ceaser Cipher with shift factor of 3 converts 'I want some cheeseburgers just to eat' to 'L ZDQW VRPH FKHHVHEXUJHUV MXVW WR HDW'", () => {
    expect(ceaserCipher("I want some cheeseburgers just to eat", 3)).toBe("L ZDQW VRPH FKHHVHEXUJHUV MXVW WR HDW");
})

test("Analyse array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})