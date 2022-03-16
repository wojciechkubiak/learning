// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    chars[char] ? chars[char]++ : chars[char] = 1;
  }

  for (const value in chars) {
    if(chars[value] > max) {
      max = chars[value];
      maxChar = value;
    }
  }
  
  return maxChar;
};

module.exports = maxChar;
