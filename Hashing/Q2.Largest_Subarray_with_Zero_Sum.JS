/**
 * 
    Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.
    
    Example 1:
    Input:
    N = 8
    A[] = {15,-2,2,-8,1,7,10,23}
    Output: 5
    Explanation: The largest subarray with
    sum 0 will be -2 2 -8 1 7.

 */
//* Bruth Force
//! TC: O(N2)
//! SC: O(1)
let maxLen1 = function(nums, n) {
    let max = 0;
    let sum = 0;
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            sum += nums[j]
            if(sum == 0) {
                let len = j - i;
                if(len>max) {
                    max = len
                }
            }  
        }
    }
    return max;
}

let le = maxLen1([15,-2,2,-8,1,7,10,23], 8)
console.log(le)

//* HashMap
//% Approach: 
//! TC: O(nlogn) i.e `n` for trverse and `logn` for search in hashset
//! SC: o(n) //Push into hash set

let maxLen = function(arr, n) {
    let sum =0;
    let collection = new Map();
    let max_len = 0
    for(let i=0; i<n; i++) {
        sum = sum + arr[i];
        if(sum == 0) {
            max_len = i + 1;
        } else {
            if(collection.get(sum) != undefined) {
               let find_max = i - collection.get(sum);
               if(find_max > max_len) {
                  max_len = find_max;
               } 
            } else {
                collection.set(arr[i], i)
            }
        }
    }
    return max_len;
}
let o = maxLen([15,-2,2,-8,1,7,10,23], 8)
console.log(o)