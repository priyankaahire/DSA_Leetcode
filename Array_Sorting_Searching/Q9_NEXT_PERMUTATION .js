//* Examaple: https://leetcode.com/problems/next-permutation/
// Input: nums = [1,2,3]
// Output: [1,3,2]
// Input: nums = [3,2,1]
// Output: [1,2,3]
// Input: nums = [1,1,5]
// Output: [1,5,1]

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

//% 1. First Approach:
       //% 1. Will generate the all possible combination of given array
       //% 2. Lineally traverse throught the dictionary and check the given array find inside or not once it will find
       //% 3. Will take the next combination is our output
//! TC: O(N2)
//! SC: We used one more extra aaray to stored all possible combination so : O(1)
let nextPermutation_first = function(nums) {
    console.log("----------------------- First next permutation solution------------------------")
    let combination = []
    for(let i=0; i<nums.length; i++){
        console.log("i: "+i+ " = "+nums[i])
        for(let j=i+1; j<nums.length-1; j++) {
                let temp  = nums[i];
                nums[i]   = nums[j]
                nums[j] = temp
        }
        combination.push(nums)
        console.log(combination)
    }
}
nextPermutation_first([1, 3, 5, 4, 2]);

//% 2. Approach: Optimazation of 1st one

//% 3. Approach: optimization of second approach
       //% 1. first breakdown and compare array element and check index (i-2) element is greater than (i-1) element
       //% 2. find the gratest number then 
//! TC: O(N) + O(N) + O(N) = O(n)
//!SC: NO EXTRA SPACE IS REQUIRED WE USED TEH SAME INPUT ARRAY SO : O(1)
let nextPermutation = (nums) => {

    console.log("----------------------- Net permutation optimise solution------------------------")
    let i,j;
    console.log("Input: ", nums)
    if(nums.length <= 1 || nums == null) return;
    //* 1. Comapring and breaking up the loop if (i-2)th index element is greather than (i-1)th element
    //* 2. Backword linerally traversing still index-2 because we breaking down it 2 
    //* Here it will start from the 
    for(i = nums.length -2; i>=0; i--) {
        console.log("i: "+i+" current value: "+nums[i]+" Next value: " +nums[i+1])
        if(nums[i] < nums[i+1]) {
            break;
        }
    }
    //* 2. No index is found then reverse the array and return it
    if(i<0) {
        while(i<j) swap(nums, i++, j--)
    } else {
        //* Before we swap we nned one more grater number than current position of i
        //* find the next greater no than no. at position i
        for(j = nums.length -1; j>i; j--){
            console.log("j: "+j+" current value: "+nums[j]+" Next value: " +nums[j+1])
            if(nums[j]>nums[j+1])
                break;
        }
    }
    //* Swap the number and reverse the final array 
    swap(nums, i, j)
    reverse(nums, i+1, nums.length - 1)

    function swap(nums, i, j) {
        let temp =nums[i];
        nums[i] = nums[j]
        nums[j] = temp
    }

    function reverse(nums, i, j) {
        while(i < j) swap(nums, i++, j--)
    }
    return nums;
}


let optimise = nextPermutation([1, 3, 5, 4, 2]);
console.log("Output: ", optimise)
