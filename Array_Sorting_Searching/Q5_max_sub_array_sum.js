/**
 * 
 * Given an integer array nums, find the subarraywith the largest sum, and return its sum.
        Example 1:
        Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
        Output: 6
        Explanation: The subarray [4,-1,2,1] has the largest sum 6.
        Example 2:

        Input: nums = [1]
        Output: 1
        Explanation: The subarray [1] has the largest sum 1.
        Example 3:

        Input: nums = [5,4,-1,7,8]
        Output: 23
        Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
 * 
 */


//% Approach 1:
  //% 1. 1st Loop over the first time rest of other item
  //% 2. 2nd Second loop get rest element one by one
  //% 3. 3rd loop making sum of all elements
  //% 4. Stored the sum into the varibale
  //% 5. Find the max from the sum 
    //! Time Complesity: O(n3)
let findMaxSubArrySum = function(input_array) {
    console.log("************************ First Approach *********************************"); 
    let n = input_array.length;
    let max;
    for(let i=0; i<= n-1; i++) {
        for(let j=i; j<= n-1; j++) {
            let sum = 0;
            for(k=i; k<=j;k++) {
                sum = sum + input_array[k];
            }
            if(max){
                if(sum > max) {
                    max = sum;
                } 
            } else {
                max = sum;
            }
        }
    }
    return max;
}
let first_approach = findMaxSubArrySum([1])
console.log("Max sum: ", first_approach)

//% Approach 2: It is jsut optimization of 1st approach
  //% 1. 1st Loop over the first time rest of other item
  //% 2. 2nd Second loop get rest element one by one
  //% 3. at the same time create the sum varibale and stored the value of itr
  //% 4. find the max from the all sums
  //! Time Complesity: O(n2)
function maxSubArray(input_array) {
    console.log("************************ First Approach optimization **********************"); 
    let n = input_array.length;
    let max;
    for(let i=0; i<=n-1; i++) {
        sum = 0;
        for(j=i; j<=n-1; j++) {
            sum = sum + input_array[j];
            if(max) {
                if(max < sum)
                    max = sum
            } else
                max = sum;
        }
    }
    return max;
}

let optimize_approach = maxSubArray([-2, -1,-3, 4, -1, 2, 1, -5, 4])
console.log("Max sum: ", optimize_approach);

//%Approach 3: kadane's Algorithum
  //% 1. lineraly traverse the array set sum = 0; and max = nums[0]
  //% 2. Checking one by one 
         //% 1. sum = sum + nums[i]
         //% 2. If sum < 0 (negative) then set sum = 0 becaus ethere is no use to carry negative sum
         //% 3. If sum > 0 then find the max = max < sum ? max as sum : otherwise max as it is


  let kadanAlgo = function(nums) {
    let n   = nums.length;
    let max = nums[0];
    let sum = 0;
    for(let i=0; i<n; i++) {
        if(i< n) {
            console.log(i)
            sum = sum + nums[i];
            if(sum < 0) {
                sum = 0;                      //! If sum is negative then we will update it by 0 because there is no use to carry the subararay which containe negative 
            } else {
               max = max < sum ? sum : max;   //! If sum is positive then will update the max by sum if sum > max
            }
        } 
        else {
            sum = sum + nums[i];
            max = max < sum ? sum : max; 
        }
    }
    return max;
  }
  console.log("**************     **************"); 
  let kadan_approach = kadanAlgo([-2,-1])
  console.log("Max sum: ", kadan_approach);
//   let kadan_approach2 = kadanAlgo([5,4,-1,7,8])
//   console.log("Max sum: ", kadan_approach2);
//   let kadan_approach3 = kadanAlgo([-2,1,-3,4,-1,2,1,-5,4])
//   console.log("Max sum: ", kadan_approach3);

var maxSubArray = function(nums) {
    let n   = nums.length;
    let max =0
    let sum = 0;
    if(n==1) return nums[0]
    if(n==2) {
        let max = nums[0] + nums[1]
        for(let i=0; i<n; i++) {
            sum = nums[i]
            if(sum>max) {
                max = sum;
                console.log("Current max", max)
            }
        }
        return max;
    }
    for(let i=0; i<n; i++) {
        console.log("------"+i+"-------")
      //  max = nums[i];
        sum = 0
        for(let j=i; j<n;j++) {
            sum = sum + nums[j];
            console.log(sum)
            if(sum>max) {
                max = sum;
                console.log("Current max", max)
            }
        }
    }
    return max;
};

let c =maxSubArray([-2,-1])
console.log(c)
