

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

*/

//* Bruth Force Algorithum
//! TC: O(N2) SP: O(1)
var first_twoSum = function(nums, target) {
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            sum = nums[i] + nums[j]
            if(sum == target) {
              return [i, j]
            }
        }
    }
}

//* Hash table
//! TC: O(N) 
//! SC: O(N): We are uisng hashtbale to it will take o(n) space
//! O(1) for the insertion and O(1) fro the seraching so in avrage case
let twoSum = function(nums, target) {
    let n = nums.length;
    const collection = new Map();
    for(let i=0; i<n; i++) {
        let diff = target - nums[i]
        if(collection.has(diff)) {
            return [collection.get(diff), i] //! one index i get from the hashtbale and one from then current index
        } 
        collection.set(nums[i], i) //value & index
    }
    return []
}
let output = twoSum([2,7,11,15], 9)
console.log(output)