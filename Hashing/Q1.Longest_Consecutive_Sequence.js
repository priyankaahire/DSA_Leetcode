/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    You must write an algorithm that runs in O(n) time.
        Example 1:

        Input: nums = [100,4,200,1,3,2]
        Output: 4
        Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
        Example 2:

        Input: nums = [0,3,7,2,5,8,4,6,0,1]
        Output: 9
 * 
 * 
 */

//*  Brute Force
//% Appraoch: Brute Force
let longestConsecutive = function(nums) {
    let n = nums.length;
    if(n == 0) return 0
    let longestConsCount = 0;
     for(let i=0; i<n;i++) {
        let currentNum = nums[i];
        let currentCount = 1;
        while(findNextConsecutive(nums, currentNum+1)) {
            currentNum++;
            currentCount++;
        }
        if(currentCount>longestConsCount) longestConsCount = currentCount;
     }
     return longestConsCount
}

function findNextConsecutive(nums, current) {
    for(let i=0; i<nums.length;i++) {
        if(nums[i] == current) {
            return true;
        }
    }
    return false;
}

longestConsecutive([0,3,7,2,5,8,4,6,0,1]);
longestConsecutive([100,4,200,1,3,2]); 
//* Hash Set'
//% Appraoch:
//!TC:
//!SC: O(1)

let longestHashSet = function(nums) {
    let n= nums.length;
    let hasSet = new Map();
    let max_count = 0;
    for(let i=0; i<n; i++) {
        if(!hasSet.has(nums[i])) {
            hasSet.set(nums[i], i)
        }
    }
    for(let i=0; i<n; i++) {
      if(hasSet.has(nums[i])) {
        //% If find don't need to do anything
        let currentNum  = nums[i]
        let count = 1;
        while(hasSet.has(currentNum + 1)) {
            count++;
            currentNum++;
        }
        if(max_count< count) max_count = count;

      } 
    }
}

longestHashSet([0,3,7,2,5,8,4,6,0,1]);
longestHashSet([100,4,200,1,3,2]);