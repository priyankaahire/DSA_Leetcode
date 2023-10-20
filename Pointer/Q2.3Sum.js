
/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


*/

//* Bruth Force Algorithum
//! TC: O(N3) SP: O(1)
let three_sum = function(nums){
    let target = 0
    let n = nums.length;
    if (nums.length === 3) {
        if (nums[0]+nums[1]+nums[2] === 0) {
            return [[nums[0],nums[1],nums[2]]];
        }
    }
    let back_push = []; //* It is always checking duplication of element
    //! array should be sort before avoiding duplicate
    if(nums.length <= 3000) {
        nums = nums.slice().sort((a, b) => a - b)
        for(let i =0; i<n; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            for(let j=i+1; j<n; j++) {
                if(j > i+1 && nums[j] === nums[j - 1]) continue;
                for(let k=j+1; k<n;k++) {
                    if(k > j+1 && nums[k] === nums[k - 1]) continue;
                    if(target == (nums[i]+nums[j]+nums[k])) {
                        back_push.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }
    }
    return back_push;
}


//* Optimise one of O(N3) -> O(N2)
let threeSum = function(nums) {
    let back_push = [];
    let n = nums.length;
    if(n<3) return back_push;
    if(n==3) return [nums[0], nums[1], nums[2]]
    let target = 0;
    if(nums.length <= 3000) {
        nums = nums.slice().sort((a, b) => a - b) //! (nlogn) : Descending order [ -4, -1, -1, 0, 1, 2 ]
        for(let i=0; i<n-2; i++) {
            //% Don't want to repeat, so skip  the number
           if(i > 0 && nums[i] == nums[i - 1]) continue; ////! NO repeat: i

            let j = i+1
            let k = nums.length - 1;

            while(j < k) {
                let sum = nums[i] + nums[j] + nums[k]
                if(sum == target) {

                    //% once again check should not be repeat
                    back_push.push([nums[i], nums[j], nums[k]]) 
                    while(nums[j] == nums[j+1]) j++; //! NO repeat: j
                    while(nums[k] == nums[k-1]) k--; //! NO repeat: k
                    j++;
                    k--;
                }
                else if(sum < target) {
                    j++;
                } else {
                   k--;
                }
            }
        }
    }
    return back_push;
}
//-105 <= nums[i] <= 105

let o = threeSum([-1,0,1,2,-1,-4])
console.log(o)

//* Hashing 
//! TC: O(N2) (loop nested loop) + logm(Insertion time will take checking with target and push into the set)
//! SC: O(M) (Set storage) + O(N) (Hash table)
let hashTable_threeSum = function(nums){
    let back_push = [];
    let set = new Set();
    let hasTable = new Map();
    let n = nums.length;
    let target = 0
    for(let i =0; i<n; i++) {
        if(hasTable.has(nums[i])) {
            let key = hasTable.get(nums[i]);
            hasTable.set(nums[i], ++key)
        } else {
            hasTable.set(nums[i], 1)
        }
    }
    //% a + b + c = 0 i.e c = -(a+b)
    for(let i=0; i<n; i++) { //% Iteration for a
       // hasTable.delete(nums[i])
        for(let j = i+1 ; j<n;j++) { //% Iteration for b
           // hasTable.delete(nums[j])
            let c = -(nums[i]) - (nums[j])
            if(hasTable.has(c)) {
               if(target == (nums[i] + nums[j] + c)) {
                    let s =  [nums[i], nums[j], c]
                    s.sort((a,b) => a - b)
                    back_push.push(s) //! Before pushing to set sort the array ascending -> descending
               }
            }
       ///  hasTable.set(nums[j], 1)
        }
    // hasTable.set(nums[i], 1)
    }
    return back_push;
}
// let hastbale_output = hashTable_threeSum([-1,0,1,2,-1,-4])
// console.log(hastbale_output)


//* 2 Pointer solution

let twePointerThreeSum = function(nums) {
    let n = nums.length;
    let result = []
  //  if(n == 3) return [nums[0], nums[1], nums[2]]
    nums = nums.sort((a, b) => a - b) //!Descending order
    for(let i=0; i<n-2; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue; 
            let low = i+1;
            let high = n-1;
            let cureent_target = -1*(nums[i]) // target - nums[i] i.e b+c = target - a
            while(low < high) {
                let two_sum = nums[low] + nums[high] // b + c
                if(cureent_target == two_sum) { // b + c = (target-a)
                    //% Push into the array triplets
                    result.push([nums[i], nums[low], nums[high]])
                    //% don't consider the same element
                    while(low < high && nums[low]  == nums[low+1]) low++;
                    while(low < high && nums[high] == nums[high-1]) high--;
                    low++;
                    high--;
                } else if(cureent_target > two_sum) {
                    low++;
                } else high--
            }
       // }

    }
    return result;
}
let twoPointer_output = twePointerThreeSum([-1,0,1,2,-1,-4])
console.log(twoPointer_output)