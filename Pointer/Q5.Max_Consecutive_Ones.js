
/*
    Given a binary array nums, return the maximum number of consecutive 1's in the array.
    Example 1:

    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum 
    number of consecutive 1s is 3.
*/
//! TC: O(N) SC: O(1)
let findMaxConsecutiveOnes = function(nums) {
    let n = nums.length;
    let count = 0;
    let max_count = 0;
    for(let i=0; i<n; i++) {
        if(nums[i] == 1) count++;
        else count = 0;
        if(count > max_count) max_count = count
    }
    return max_count
}
let d = findMaxConsecutiveOnes([1, 1])
console.log(d)
let f = findMaxConsecutiveOnes([0,0])
console.log(f)
let c = findMaxConsecutiveOnes([1,1,0,1,1,1])
console.log(c)
let r = findMaxConsecutiveOnes([1,0,1,1,0,1])
console.log(r)