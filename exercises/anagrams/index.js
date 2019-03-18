// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charmapA = buildCharMap(stringA);
  const charmapB = buildCharMap(stringB);
  if (Object.keys(charmapA).length !== Object.keys(charmapB).length) {
    return false;
  }
  for (let char in charmapA) {
    if (charmapA[char] !== charmapB[char]) {
      return false;
    }
  }
  return true;
}
function buildCharMap(str) {
  const map = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

module.exports = anagrams;
