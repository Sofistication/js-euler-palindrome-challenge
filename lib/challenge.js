'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  let result = 0;

  for (let i = 0; i < upperLimit; i++) {
    let firstBase = i.toString(base1);
    let secondBase = i.toString(base2);
    let reversedFirst = firstBase.split('').reverse().join('');
    let reversedSecond = secondBase.split('').reverse().join('');

    if ((firstBase === reversedFirst) && (secondBase === reversedSecond)) {
      result += i;
    }
  }

  return result;
};

module.exports = {
  doubleBasePalindromeSum,
};
