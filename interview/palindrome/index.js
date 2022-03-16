// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// #2 - more comparisions
const palindrome = str => str.split('').every((char, idx) => char === str[str.length - idx - 1]);

// #1
// const palindrome = (str) => str.split('').reduce((prev, curr) => curr + prev, "") === str;

module.exports = palindrome;