// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const handleString = (str) => str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');

// #2
const anagrams = (stringA, stringB) => {
  return handleString(stringA) === handleString(stringB);
};

// #1
// const handleMap = (str) => {
//   const chars = {};

//   for (let s of str.replace(/[^\w]/g).toLowerCase()) {
//     chars[s] = chars[s] + 1 || 1;
//   }

//   return chars;
// };

// const anagrams = (stringA, stringB) => {
//   const mapA = handleMap(stringA);
//   const mapB = handleMap(stringB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

//   for (let m in mapA) {
//     if (mapA[m] !== mapB[m]) {
//       return false;
//     }
//   }

//   return true;
// };

module.exports = anagrams;
