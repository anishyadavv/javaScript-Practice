// // Sort Elements of an Array by Frequency
// Problem Statement: Given an array of integers, having some duplicate elements, sort the array by frequency.

// Examples:

// Example 1:
// Input: N = 8, array[] = {1,2,3,2,4,3,1,2}
// Output: 2 2 2 1 1 3 3 4
// Explanation: Since  2 is present 3 times in an array , so print it 3 times ,then print ‘1’ 2 times and then ‘3’ 2 times and 4 has least frequency, it will be printed at last.

// Example 2:
// Input: N = 6, array[] = {-199,6,7,-199,3,5}
// Output: -199 -199 3 5 6 7
// Explanation: Since -199 is present 2 times so it will be printed at first , then 3 , 5 ,6 ,7 are present once in array , so print them in their sorted order.

function Sort(arr) {
  let ans = [];
  const length = arr.length;
  let map = new Map();

  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  const newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  console.log(newMap);

  for (let [key, value] of newMap) {
    let count = 0;
    while (count < value) {
      ans.push(key);
      count = count + 1;
    }
  }
  return ans;
}

const arr = [1, 2, 3, 2, 4, 3, 1, 2];
const arr1 = [-199, 6, 7, -199, 3, 5];
console.log(Sort(arr1));
