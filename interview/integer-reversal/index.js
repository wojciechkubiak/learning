// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// #1
const reverseInt = (n) =>
  parseInt(n.toString().split('').reduce((prev, curr) => curr + prev, '')) *
  Math.sign(n);

// #own
// const reverseInt = (n) => {
//   let result = '';

//   if(n.toString()[0] === '-') result += '-';

//   return +(result + Array.from(Math.abs(n).toString()).reduce((prev, curr) => curr + prev, ''));
// }

module.exports = reverseInt;
