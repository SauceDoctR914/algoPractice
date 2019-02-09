// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((a, b) => {
    return b + a;
  }, "");
}
module.exports = reverse;
// function reverse(str) {
//   let newString = "";
//
//   for (let char of str) {
//     newString = char + newString;
//   }
//   return newString;
// }

// let newString = "";
//
// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// return newString;
// }

return str.split("").reduce((a, b) => {
  return b + a;
}, "");
}
