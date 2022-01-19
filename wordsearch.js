const wordSearch = (letters, word) => {
  if (!letters.length) return false;

  const horizontalJoin = letters.map(ls => ls.join(""));
  const verticalJoin = [];
  // letters.length = num sub arrays (rows)
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      // letters[0] = first row
      // letters[0][0] = first row , first element
      if (i === 0) {
        // if first row
        verticalJoin.push([letters[i][j]]);
        // create a new array, ['A']
        // 2nd time around, ['W], etc.
      } else {
        // i = 1
        // j = 0
        // letters[1][0]
        verticalJoin[j].push(letters[i][j]);
      }
      // letters[0].length = length of first row, 8
    }
  }

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let verticalJoined = verticalJoin.map(ls => ls.join(""));
  for (l of verticalJoined) {
    if (l.includes(word)) return true;
  }

  return false;
};

const result = wordSearch(
  [
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ["G", "W", "C", "F", "K", "U", "A", "L"],
    ["S", "E", "I", "N", "R", "E", "L", "D"],
    ["Y", "F", "C", "F", "A", "U", "A", "L"],
    ["H", "M", "J", "T", "M", "V", "R", "G"],
    ["W", "H", "C", "S", "E", "E", "R", "L"],
    ["B", "F", "R", "E", "R", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
  ],
  "KRAMER"
);

console.log(result);

module.exports = wordSearch;
