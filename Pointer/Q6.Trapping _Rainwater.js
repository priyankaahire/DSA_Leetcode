
/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.
    Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is 
    represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
    are being trapped.
*/
//* Bruth force Appraoch
//! TC: O(N2) AND SP: O(1)
//% Need to find no .of unit of water stored
//% First need to iterate over the all index and 
//% And evenry index we need to find the max height at left side and max height from the right side
    //% Left side: o to i : left_max(arr[i])
    //% right side: i to n-1: right_max(arr[i])
//% once we find both max height the will take the min from both side
     //% min(left_max, right_max) - height[i] (current element heigth)
//%  no_of_unit +=  calculated_height
let Trapping_Rainwater = function(height) {
    let n = height.length;
    let min = height[0]
    let no_of_unit = 0;
    if(height.length == 1 || height.length == 0) return 0
    for(let i=1; i < n ; i++) {
        let right_max = height[n-1]
        let left_max = height[i]
        for(let j = 0; j <= i; j++) {
            if(left_max < height[j]) {
              left_max = height[j];
            }
        }
        for(let j = i; j < n -1; j++) {
            if(right_max < height[j]) {
                right_max = height[j];
            }
        }
        min = right_max;
        if(left_max < right_max) {
            min = left_max
        }
        no_of_unit = no_of_unit + (min - height[i])
    }
    return no_of_unit;
}
let c = Trapping_Rainwater([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(c)


//* Prefix-suffix logic
//! TC: O(N) + O(N) + O(N) AND SP: O(2N)
//% In this approch basically we remove the nested loop and indiviually we find out the max of each elemnt 
//% Now we have all prefix_arr and sufix_arr
//% Once again iterate over the all ements and for every elment get the max from the prefix and sufix arrry
    //% min(max(prefix_arr[i]), max(sufix_arr[i]))
    //%  no_of_unit +=  calculated_height
let prfix_suffix_trapping_rainwater = function(height) {
 let n = height.length;   
let prfix_sum = [];
let suffix_sum = [];
let pre_sum = height[0];
let suff_sum = height[n-1]
let no_of_unit = 0;
//! O(N)
for(let i=0; i<n;i++) {
   if(pre_sum < height[i]) {
      pre_sum = height[i]
   }
   prfix_sum.push(pre_sum) //!O(N)
}
//! O(N)
for(let i=n-1; i>=0;i--) {
    if(suff_sum < height[i]) {
        suff_sum = height[i]
     }
    suffix_sum.unshift(suff_sum) //! O(N)
}
//! O(N)
for(let i=1; i<n;i++) {
    min = suffix_sum[i];
    if(prfix_sum[i] < suffix_sum[i]) {
        min = prfix_sum[i]
    }
    no_of_unit = no_of_unit + (min - height[i])
}
return no_of_unit
}
let d = prfix_suffix_trapping_rainwater([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(d)

//* Now 2 pOinter Approach is the most Optimise Approach


let two_pointer_trapping_rainwater = function(height) {
    let n = height.length;
    let left_max = 0;
    let right_max = 0;
    let l = 0;
    let r = n-1;
    let no_of_unit = 0;
    for(let i=0; i<n; i++) {
        while(l <= r) {
            if(height[l] <= height[r]) {
                if(height[l] >= left_max) {
                    left_max = height[l];
                } else {
                    no_of_unit = no_of_unit + (left_max - height[l])
                }
                l++;
            } else {
                if(height[r] >= right_max) {
                    right_max = height[r]
                } 
                else {
                    no_of_unit = no_of_unit + (right_max - height[r])
                }
                r--;
            }
        }
    }
    return no_of_unit;
}
let t = two_pointer_trapping_rainwater([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(t);