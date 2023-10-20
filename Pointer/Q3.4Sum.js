/*
Given an array nums of n integers, return an array of all the unique 
quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

*/
//* Bruth force algorithum: 3 nested loop
//% Approach: 3 are ponter 1, j, k and i =0; j = i+1 and k= j+1 3 instread loop
//! TC: O(N4)
//! SP: O(1)
let fourSum = function(nums, target) {
    let n = nums.length;
    let result = [];
    if(n<4) return result;
    if(n == 4) {
        if(target == (nums[0] + nums[1] + nums[2] + nums[3])) {
           result.push([nums[0], nums[1], nums[2], nums[3]]);
        }
        return result;
    }
    for(let i=0; i<n; i++) {
        nums = nums.sort((a, b) => a - b)
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(let j = i+1; j<n; j++) {
            if(j>i+1 && nums[j] == nums[j-1]) continue;
            for(let k = j+1; k<n; k++) {
                if(k>j+1 && nums[k] == nums[k-1]) continue;
                for(let m = k+1; m<n; m++) {
                    if(m>k+1 && nums[m] == nums[m-1]) continue;
                    if(target == (nums[i] + nums[j] + nums[k] + nums[m])) {
                        result.push([nums[i], nums[j], nums[k], nums[m]])
                    }
                }
            }
        }
    }
    return result;
}

// let o = fourSum([0,0,0,0], 0)
// console.log(o)

//* sort + 3 pointer + BST Approach
//% Approach: 3 are ponter 1, j, k and i =0; j = i+1 and k= j+1 3 instread loop
//! TC: BST           = logn
//!     3 nested loop = O(N3)
//!     sort          = nlogn
//!-----------------------------------
//!                    n3logn + nlogn = O(N3) + 

//!SC: O(1)
let threePomiter_BST_sol = function(nums, target) {
    let n = nums.length;
    nums = nums.sort((a, b) => a - b);
    console.log("------------threePomiter_BST_sol------------")
    let result = [];
    if(n<4) return result;
    if(n == 4) {
        if(target == (nums[0] + nums[1] + nums[2] + nums[3])) {
        result.push([nums[0], nums[1], nums[2], nums[3]]);
        }
        return result;
    }

    for(let i=0; i<n; i++) {
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(let j=i+1; j<n; j++) {
            if(j> i+1 && nums[j] == nums[j-1]) continue;
            for(let k = j+1; k<n; k++) {
                let m = k+1;
                if(k> j+1 && nums[k] == nums[k-1]) continue;
                let three_pointer_sum = nums[i] + nums[j] + nums[k]
                let serach_ele = target - three_pointer_sum;
                //% BST Search
                while(m < n) {
                    if(serach_ele == nums[m]) {
                        result.push([nums[i], nums[j], nums[k], serach_ele])
                    }
                    m++;
                }
             
            }
        }
       
       
    }
    return result;
}
let o2 = threePomiter_BST_sol([0,0,0,0], 0)
console.log(o2)
let o4 = threePomiter_BST_sol([ -2, -1, 0, 0, 1, 2 ], 0)
console.log(o4)


//* Optimise solution 2 Pointer
//% Appraoch: 
            //% so basucally we have i loop which start from i to n-1 and we have j loop which start j -> from i+1 to n-1
            //% Inside that will use left and right pointer because array is sorted and we got the quadruplets and stored into the DSA
//% a + b + c + d= 0 i.e c + d = target -a - b
//% We are using 2 sum pointer c + d and will check with target - a -b 3 way we can check
    //%  If(two_sum < (target - a -b)) move left pointer (left++)
     //% If(two_sum > (target - a -b)) move right pointer (right--)
     //% if(two_sum == (target - a -b)) we push into the array and before moving to next will check next elemnt shopuld not be equla to prvious elemnt
     //% will move left untill left should not cross left and current left elemnt = to next elment while(left<right && nums[left] == nums[left+1]) left++
     //% will move right untill right should not cross left and current right elemnt = to next elemnt while(left<right && nums[right] = nums[right -1]) right--
     //% then if not then move left++ and right-- But 
//% Firts we calculater the 2 sum pointer new_target = target -a - b then we will find c+d and once the match we push the pointer value into the aaray
//% But while push or exicuting we should check duplication quadruplets should not be present into the set
//! TC: O(N3)
//! O(n2) = 2 nested loop (i and j)
//! o(n)  = move to left and right so it is also another nested loop so o(n)
//! -------------------------------------------------------------------------
//!  O(N3)

//! SC: O(1)
//   we can say
//* 2 pointer solu
let twoPointerFourSum = function(nums, target) {
    let n = nums.length;
    nums = nums.sort((a, b) => a - b);
    console.log("------------two Pointer Four Sum------------")
   // console.log(nums)
    let result = [];
    if(n<4) return result;
    if(n == 4) {
        if(target == (nums[0] + nums[1] + nums[2] + nums[3])) {
        result.push([nums[0], nums[1], nums[2], nums[3]]);
        }
        return result;
    }
    for(let i =0; i<n-2; i++) {
         //! if we aredy check for the value 1 which is at postion 1 so it doen't make sence to check for the same value thats we check
        //! currnet value because i++ done and previous value should not same if same will continue i++
        if(i>0 && nums[i] == nums[i- 1]) continue;
        for(let j = i+1; j<n; j++) {
           //! if we aredy check for the value 1 which is at postion 1 so it doen't make sence to check for the same value thats we check
           //! currnet value because j++ done and previous value should not same if same will continue j++
            if(j>i+1 && nums[j] == nums[j - 1]) continue;
            let left = j + 1;
            let right = n - 1;
            //% a + b + c + d= 0 i.e c + d = target -a - b
            let sum = target - nums[j] - nums[i] //% here sum = target -a - b
            while(left < right) { //! once left cross right the movent we need to stop it move to j++
                let two_sum = nums[left] + nums[right];
                if(two_sum < sum) {
                    //% We are moving left because array is sorted once we move left definitly will get bigger number but 
                    //% if we move right will get smaller no. that's why we are moving left i.e we need bigger number to reach the target
                    left++;
                } else if(two_sum > sum) {
                    //% We are moving to leftarray is sorted once we move left definitly will get bigger number but 
                    //% if we move right will get smaller no. that's why we are moving right i.e we need smaller number to reach the target
                    right--;
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    
                     //! Here we are checking the number is ame or not because if we alreday check for the same number 
                     //! we didn't get the ans so it does't make scense to to check for the same number again 
                    //% Remove the duplicate one
                    while(left<right && nums[left] == nums[left+1]) {
                        left++;
                    }
                    while(left<right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    return result;
}
let j = twoPointerFourSum([ -2, -1, 0, 0, 1, 2 ], 0)
console.log(j)