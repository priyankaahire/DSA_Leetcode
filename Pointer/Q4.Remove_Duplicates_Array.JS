/***
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.


Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 */
//* Hash map solution
//! Tc: SP:
let remove_duplicate = function(nums) {
    let n = nums.length;
    let setMap = new Set();
    //* Pushing into the map using set map dupllicate not added
    for(let i= 0; i<n; i++) {
        setMap.add(nums[i]);
    }
    //* Start extracting from HashMap and push into the existing array
    let i =0;
    setMap.forEach((value) => {
        nums[i] = value;
        i++;
    });
    //* Set remaning array of element as "_"
    for(let i = setMap.size; i<n; i++) {
        nums[i] = "_";
    }
    return setMap.size;

}

let d = remove_duplicate([1,1,2])

//* mOST Optimise Appraoch : 2 -pointer
//! TC: O(N)  SC: O(1)
//% Appraich 
    //% Start iteration form i ton 
    //% But i=0; and j=i+1 
    //% check if a[j] > a[i] then
                             //% i++;  move i one stem
                             //% a[i] = a[j] => assigh a[j] to a[i]
                             //% j++: MOve j one step
                //% If not then only j++;
    //% Excute j until n so while(j<= n) and stop the exicution a
    //% Now check i at which index so return i+1 i.e no of element is unique in the array
let twoPointerRemoveDuplicate  = function(nums) {
    let n = nums.length;
    for(let i=0; i<n; i++) {
        j = i+1;
        while(j <= n) {
            if(nums[j] > nums[i]) {
                i++;
                nums[i] = nums[j];
                j++;
            } else {
                j++;
            }
        }
        return i+1;
    }
}
let e = twoPointerRemoveDuplicate([1,1,2])
console.log(e)
let f = twoPointerRemoveDuplicate([1, 1, 2, 2, 2, 3, 3])
console.log(f)