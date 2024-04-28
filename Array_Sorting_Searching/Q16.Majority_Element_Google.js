/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Input: nums = [3,2,3]
Output: [3]

Input: nums = [1]
Output: [1]

Input: nums = [1,2]
Output: [1,2] 

IF it is n/3 i.e max 2 major element
If it is n/2 i.e max 1 major element
If it is n/4 i.e max 3 major element
*/
//% Approach: Brute force approach
//! TC: O(N) * O(N) = O(N2)
//! SC: O(1)
let first_majorityElements = function(nums) 
{
    console.log("----------------First Approach----------------")
    let n = nums.length;
    let major_elements = [];
    for(let i=0; i<n; i++) {
        let count = 0;
        console.log(i)
        for(let j=i; j<n; j++) {
            if(nums[i] == nums[j]) {
                count++;
                if(count >= n/3) {
                    major_elements.push(nums[i])
                }
            }
        }
    }
    return major_elements;
}
// let hasmap_output = first_majorityElements([2,2,1,1,1,2,2])
// console.log(hasmap_output)
// let hasmap_output2 = first_majorityElements([3,2,3])
// console.log(hasmap_output2)
// let hasmap_output3 = first_majorityElements([6,5,5])
// console.log(hasmap_output3)
// let hasmap_output4 = first_majorityElements([1])
// console.log(hasmap_output4)
// let hasmap_output5 = first_majorityElements([2,2,3,3,3,3,2])
// console.log(hasmap_output5)
let hasmap_output6 = first_majorityElements([2,2])
console.log(hasmap_output6)
//% Appraoch: Hash map (using Frequency array)
//! TC: O(N)
//! SC: O(n) : Frequency array will take space


//% Appraoch: Hash map (using Map)
//! TC: O(nlog) : Bt still some extra space of logn is required
//! SC: O(1)



//% Approach: Optimise Approach: Moore's Voting Algorithm
//! TC: O(N) + O(N)
//! SC: 0(1)
let majorityElement = function(nums) {
    console.log("----------------Moor's voting Alogorithm----------------")
    let n = nums.length;
    let first_count = 0, second_count = 0;
    let first_ele = -1, second_ele   = -1;
    let major_elements = []
    let condition = n/3
    //O(N): First pass of element over the array
    for(let i of nums) {
        if(i == first_ele) first_count++;
        else if(i == second_ele)  second_count++;
        else if(first_count == 0) {
            first_ele = i;
            first_count = 1
        } else if(second_count == 0) {
            second_ele = i;
            second_count = 1
        } else {
            first_count--;
            second_count--;
        }
    }
    //O(N): first_ele and second_ele more than n/3 times
    first_count = 0
    second_count = 0
    for(let i=0; i<n; i++) {
        if(nums[i] == first_ele) first_count++;
        else if(nums[i] == second_ele) second_count++;
    }

    if(first_count > condition) major_elements.push(first_ele)
    if(second_count > condition) major_elements.push(second_ele)
    return major_elements
}

// let hasmap_output = majorityElement([2,2,1,1,1,2,2])
// console.log(hasmap_output)
// let hasmap_output2 = majorityElement([3,2,3])
// console.log(hasmap_output2)
// let hasmap_output3 = majorityElement([6,5,5])
// console.log(hasmap_output3)
// let hasmap_output4 = majorityElement([1])
// console.log(hasmap_output4)
// let hasmap_output5 = majorityElement([2,2,3,3,3,3,2])
// console.log(hasmap_output5)