// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// #2
const chunk = (array, size) => {
  const chunks = [];
  let idx = 0;

  while(idx < array.length) {
    chunks.push(array.slice(idx, idx + size));
    idx += size;
  }
  
  return chunks;
}

// #1
// const chunk = (array, size) => {
//   const chunks = [];

//   for(let arr of array) {
//     const last = chunks[chunks.length - 1];

//     if(!last || last.length === size) {
//       chunks.push([arr]);
//     } else {
//       last.push(arr);
//     }
//   }

//   return chunks;
// }

module.exports = chunk;