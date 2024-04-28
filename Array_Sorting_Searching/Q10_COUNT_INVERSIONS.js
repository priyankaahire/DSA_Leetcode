
//* COUNT INVERSIONS in an ARRAY
/* 
Input: arr[] = {8, 4, 2, 1}
Output: 6
Explanation: Given array has six inversions: (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).

Input: arr[] = {1, 20, 6, 4, 5}
Output: 5
Explanation: Given array has five inversions: (20, 6), (20, 4), (20, 5), (6, 4), (6, 5) 
*/
//% 1. First Appraoch: Brute method but here we linerally traverse over the array 
//% 2. Alway check the i < j i.e 
//% 3. let count = 0
//% 4. First iteration start on each and every element for array
//% 5. Second iteration on right side of current element
//% 6. then if nums[i] > nums[j] then we will count++
//! TC:  O(N2), Two nested loops are needed to traverse the array from start to end.
//! SC:  O(1), No extra space is required.
let count_inversion_first = function(nums) {
    console.log("---------------------- Brute Method ------------------------");
    let count = 0;
    for(let i=0 ; i< nums.length; i++) {
        for(j=i; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                count++;
            }
        }
    }
    console.log(count)
}
count_inversion_first([8, 4, 2, 1])


//% Count Inversions in an array using Merge Sort
//% Merge sort: You have an array low to high [5, 3, 2, 4, 1] you break it the 
//% 1.  low /mid so you can easily find my low + high/2
//% 2.  left: mid+(high/2)
//% 3.  Right = mid+1/high
//% 4.  We have to break them into the sub path until and unless reach to the single element
//% 5.  once the reached you merge them into the sorted arrays
//% 6.  once you mereg we will get 2 left ad right array like [2.3, 5] and [1, 4] respectivelly 
//% 7.  Before we merge everyting will be sorted i.e left one is sorted it self and right is also sorted it self
//% 8.  at first put a pointer on 2 and pointer 1 two merge them to merged them you took small element here small element is 1 and move ethis pointer 
//% 9.  now pointer at 2 and 4 now you took the 2 and pointer++
//% 10. now pointer at 3 and 4 now you took the 3 and pointer++
//% 10. Now pointer at 5 and 4 and took the 4 and pointer++ 
//% 11  But now one of the pointer cross the bownderies and you stop  and take the remaning element which is 
//% 12. now array is, 1, 2, 3, 4, 5
//% 13. HOW YOU GOINT TO INVERSIOSN OF THIS ARRAY?
//% 14. While merging we will modify the merge operation let's see How?????????????
//% 15. Imgain you have 5 and 3 and 5 > 3 then print the 3 and once you find cross the brounderies set the 5
//% 16. a[i] >  a[j] here a[i] =  5 and a[j] = 3 so might be can say 3 can be my j and everyone after after 5 everything is every time it is basically grater than 3 
//% After merging i am just implementd the logic is whenevery somting coming from the right of the pointer of the left add into the counter
//% But it is modify the array but if you want to modify Tthen, we need to create a copy of the original array and call mergeSort() on the copy to preserve the original array’s order.
//! TC: O(n log n): The algorithm used is divide and conquer
//! SC:  O(n),      Temporary array.
let optimal_approach = function(nums) {


}
optimal_approach([5, 3, 2, 4, 1])