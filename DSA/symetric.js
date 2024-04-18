//Find all Symmetric Pairs in the array of pairs

// Example 1:
// Input: (1,2),(2,1),(3,4),(4,5),(5,4)
// Output: (2,1) (5,4)
// Explanation: Since (1,2) and (2,1) are symmetric pairs and (4,5) and (5,4) are symmetric pairs.

// Example 2:
// Input: (1,5),(2,3),(4,2),(5,1),(2,4)
// Output: (2,4) (5,1)
// Explanation: Since (1,5) and (2,4) are symmetric pairs and (5,1) and (4,2) are symmetric pairs.

//input  arr = [{1,2},{2,1},{3,4},{4,5},{5,4}];

function findAllSymmetric(arr) {
  const hashmap = {};
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const first = arr[i][0];
    const second = arr[i][1];

    if (hashmap[second] === first) {
      console.log(`(` + first  + `,` + second + `)`);
    } else {
      hashmap[first] = second;
    }
  }
}

const arr = [
  [1, 2],
  [2, 1],
  [3, 4],
  [4, 5],
  [5, 4],
];
findAllSymmetric(arr);
