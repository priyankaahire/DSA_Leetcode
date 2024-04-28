
/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/
//% Approach: linearlly traverse over the one by element and check with the another element
//! TC: O(N) + O(N)
//! SC: O(1)
let findMajorityElement = function(nums) {
    console.log("-------------- First Approach---------------")
    let n = nums.length;

    if(n==1) return nums[0]
    for(let i=0; i<n; i++) { //! It will take O(N)
        let count = 0;
        for(let j = i; j < n; j++) { //! It will take O(N)
            if(nums[i] == nums[j]) {
                count++;
                if(count >= n/2) {
                    console.log("count: "+count+" n "+n+" value:"+nums[j])
                    return nums[j]
                }
                
            }
        }
    }
}

//let output = findMajorityElement([2,2,1,1,1,2,2])
// console.log(output)
// let output2 = findMajorityElement([3,2,3])
// console.log(output2)
// let output3 = findMajorityElement([6,5,5])
// console.log(output3)
// let output4 = findMajorityElement([1])
// console.log(output4)
// let output5 = findMajorityElement([2,2,3,3,3,3,2])
// console.log(output5)


//% Approach: Hash map: key value and key is value (key, value) == (element, no of times key appears)
              //% key: element
              //% value: no of time key is appear
//% Steps:
            //% 7 7 doesnt occured so set as 1 and next time you can set as 2 (ele, times)
            //%  

//! TC: O(N)    
//! SP: O(N)     
let hasmap_majorityElementFrequency = function(nums) {
    console.log("-------------- Hash map Approach using frequecy array---------------")
    let n = nums.length;
    let max = getMax(nums)
    let frequencyArray = new Array(n);
    if(n==1) return nums[0]
    //* Frequency Array creation
    for(let i=0; i < max; i++) {
        frequencyArray[i] = 0;
    }
    //* Now checking over the hash table elment value > n/2 then return the Majaority of element
    for(let i=0; i < n; i++) {
        frequencyArray[nums[i] - 1]++
        if(frequencyArray[nums[i] - 1] >= Math.floor(n/2)) {
            return nums[i];
        }
        console.log("frequencyArray", frequencyArray)
    }
}

// let hasmap_output = hasmap_majorityElementFrequency([2,2,1,1,1,2,2])
// console.log(hasmap_output)
// let hasmap_output2 = hasmap_majorityElementFrequency([3,2,3])
// console.log(hasmap_output2)
// let hasmap_output3 = hasmap_majorityElementFrequency([6,5,5])
// console.log(hasmap_output3)
// let hasmap_output4 = hasmap_majorityElementFrequency([1])
// console.log(hasmap_output4)
// let hasmap_output5 = hasmap_majorityElementFrequency([2,2,3,3,3,3,2])
// console.log(hasmap_output5)

//! Not able to Test
let hasmap_majorityElement = function(nums) {
    console.log("-------------- Hash map Approach using map function---------------")
    let n = nums.length;
    if(n==1) return nums[0]
    let numsMap = new Map()
    for(let i=0; i<n; i++) {
    let count = 0;
        console.log(numsMap)
        if(numsMap.has(nums[i]) == false) {
            count++;
            numsMap.set(nums[i], true)
        } else {
            if(count >= Math.floor(n/2)) {
               return nums[i]
            } 
        }
    }
}
// let hasmap_output = hasmap_majorityElement([2,2,1,1,1,2,2])
// console.log(hasmap_output)
// let hasmap_output2 = hasmap_majorityElement([3,2,3])
// console.log(hasmap_output2)
// let hasmap_output3 = hasmap_majorityElement([6,5,5])
// console.log(hasmap_output3)
// let hasmap_output4 = hasmap_majorityElement([1])
// console.log(hasmap_output4)
// let hasmap_output5 = hasmap_majorityElement([2,2,3,3,3,3,2])
// console.log(hasmap_output5)

function getMax(nums) {
    let max= nums[0]
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > max) {
            max= nums[i]
        }
    }
    return max;
}

//% Appraoch: Moore's Voting Algorithm
     //% setps:
          //% 1. 

let mooreVotingAgorithum = function(nums) {
    console.log("-------------- Moore's Voting Algorithm---------------")
    let count =0;
    let ele = nums[0];
    if(nums.length==1) return nums[0]
    for(let i=0; i<nums.length; i++) {
        if(count ==0) ele =  nums[i]
        if(ele == nums[i]) count++;
        else count--;
    }
    return ele;
}
let hasmap_output = mooreVotingAgorithum([2,2,1,1,1,2,2])
console.log(hasmap_output)
let hasmap_output2 = mooreVotingAgorithum([3,2,3])
console.log(hasmap_output2)
let hasmap_output3 = mooreVotingAgorithum([6,5,5])
console.log(hasmap_output3)
let hasmap_output4 = mooreVotingAgorithum([1])
console.log(hasmap_output4)
let hasmap_output5 = mooreVotingAgorithum([2,2,3,3,3,3,2])
console.log(hasmap_output5)