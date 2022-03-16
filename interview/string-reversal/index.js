/* --- Directions
 * Given a string, return a new string with the reversed
 * order of characters
 * --- Examples
 * reverse('apple') === 'leppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */


// #4
const reverse = (str) => str.split('').reduce((prev, curr) => curr + prev, "");

// #3
// const reverse = (str) => {
//   let result = "";

//   for(const s of str) {
//     result = s + result;
//   }

//   return result;
// }

// #2
// const reverse = (str) => {
//   let result = "";

//   for(let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// };

// #1
// const reverse = (str) => str.split('').reverse().join('');

module.exports = reverse;
