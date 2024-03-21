const capitalize = (string) => {
  const capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return capitalized;
};

const reverseString = (string) => string.split('').reverse().join('');

class calculator {
    static add(a, b) { return a + b}

    static subtract(a, b) { return a - b}

    static divide(a, b) { return a/b}

    static multiply(a,b) { return a*b}
}

const ceaserCipher = (string, shiftFactor) => {
    const low = 97
    const upp = 122

    const cipher = [];
    const letterArray = Array.from(string.toLowerCase());
    letterArray.forEach((letter) => {
        if(letter === " ") {
            cipher.push(letter);
        } else {
            const shiftedCharCode = letter.charCodeAt(0) + shiftFactor;
            const shifted = shiftedCharCode > upp ? low + (shiftedCharCode - upp) : shiftedCharCode;       
            cipher.push(String.fromCharCode(shifted).toUpperCase()); 
        }        
    })
    return cipher.join("");
}

const analyzeArray = (arr) => {
    let length = 0;
    let min = Infinity;
    let max = 0;
    let sum = 0;
    arr.forEach((item) => {
        length += 1;
        sum += item;
        min = item < min ? item : min;
        max = item > max ? item : max;
    })

    return {
        average: sum / length,
        min,
        max,
        length
    }
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray
};
