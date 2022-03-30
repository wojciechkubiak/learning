// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// #2
const capitalize = (str) => {
  let result = str[0].toUpperCase();

  for(let i = 0; i < str.length; i++) {
    if(str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
}

// #1
// const capitalize = (str) => {
//   const capitalized = [];

//   for(let a of str.split(' ')) {
//     capitalized.push(`${a[0].toUpperCase()}${a.slice(1)}`);
//   }
  
//   return capitalized.join(' ');
// }

module.exports = capitalize;