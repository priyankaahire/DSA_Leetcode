
/*
LEETCOD:
You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/
//% First Approach: Brute-Better-Better-Optimal
        //% 1. Run a nested loop, outer loop for the row, and inner loop for the column
        //% 2. Check every element with row and col if the element id found the return true
        //% 3. If the element is not found then return false
       //! TC: O(N X M)
       //! SP: O(1)
let leetCodeSearchInMatrix = function(matrix, target) {
    console.log("------------------- LEETCODE FIRST APPROACH-------------------")
   let rowLen = matrix.length;
   let colLen = matrix[0].length
   for(let row=0; row< rowLen; row++) {
        for(let col=0; col < colLen; col++) {
            if(matrix[row][col] == target) {
                return true;
            }
        }
   }
   return false;
}
let firstApproach = leetCodeSearchInMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
console.log(firstApproach)
let firstApproach1 = leetCodeSearchInMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)
console.log(firstApproach1)

//% Second Approach: mid and low
    //%  1. 
//! TC: 
//! SC: O(1) : No extra space 
let leetCodeSearchMatrixOptimise = function(matrix, target) {
    console.log("------------------- LEETCODE OPTIMISE APPROACH-------------------")
    if(matrix.length == 0) return false;
    let rowL = matrix.length;
    let colL = matrix[0].length;
  
    //* Imaginary index will create
    let low = 0;
    let high = (rowL * colL) - 1;

    while(low <= high) {
        let mid = Math.floor((low + (high - low) / 2))
        let row = Math.floor(mid/colL);
        let col = Math.floor(mid % colL)
        if(row <= matrix.length && col >= 0) {
            if(matrix[row][col] == target) {
                return true;
            }
            if(matrix[row][col] > target) {
                high = mid - 1;
            } else {
                //* Moving right to the 
                low = mid + 1;
            }
        } else {
            return false;
        }
    }
    return false;
}
let optimise_output3 = leetCodeSearchMatrixOptimise([[1,1]], 2)
console.log(optimise_output3)
let optimise_output2 = leetCodeSearchMatrixOptimise([[1,3]], 3)
console.log(optimise_output2)
let optimise_output = leetCodeSearchMatrixOptimise([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
 console.log(optimise_output)


/*
GEEKSFORGEEKS
Given an n x n matrix and an integer x, find the position of x in the matrix if it is present. Otherwise, 
print “Element not found”. Every row and column of the matrix is sorted in increasing order.
The designed algorithm should have linear time complexity
Input: mat[4][4] = { {10, 20, 30, 40},  x = 29
                               {15, 25, 35, 45},
                               {27, 29, 37, 48},
                             {32, 33, 39, 50}}
 
Output: Found at (2, 1)
Explanation: Element at (2,1) is 29

Input : mat[4][4] = { {10, 20, 30, 40},   x = 100
                                {15, 25, 35, 45},
                               {27, 29, 37, 48},
                              {32, 33, 39, 50}};
     
Output: Element not found
Explanation: Element 100 does not exist in the matrix
*/
//% First Appraoch: The simple idea is to traverse the array and search elements one by one
    //% 1. Run a nested loop, outer loop for the row, and inner loop for the column
    //% 2. Check every element with row and col if the element id found the print "Element found"
    //% 3. If the element is not found then print "Element not found"
//! Time Complexity: O(N2)
//! Auxiliary Space: O(1), since no extra space has been taken
let GFG_SearchMatrix = function(matrix, target) {
   console.log("------------------- GFG FIRST APPROACH-------------------")
   let rowLen = matrix.length;
   let colLen = matrix[0].length
   for(let row=0; row< rowLen; row++) {
        for(let col=0; col < colLen; col++) {
            if(matrix[row][col] == target) {
                return "Element found at (" + row + "," + col + ")";
            }
        }
   }
   return "Element Not found";
}
let GFG_output = GFG_SearchMatrix([
     [ 10, 20, 30, 40 ],
     [ 15, 25, 35, 45] ,
     [ 27, 29, 37, 48 ],
     [ 32, 33, 39, 50 ]], 29)
console.log(GFG_output)

//% Second Appraoch: Search in a row-wise and column-wise sorted matrix 
    //% Approch:
        //% 1. Start from the last element of the first row i.e right-most elements is pointer and elements
        //% 2. Keep checking if matrix[i][j] > target then move col-- (move to the left) otherwise row++ (Down the) still row < rowLength and col >=0
        //% 3. Once traget element is found return the message "Element found" if not the return "Element not found"
//! Time Complexity: 
//! Auxiliary Space: O(1), since no extra space has been taken

let GFG_optimiseSearchMatrix = function(matrix, target) {
    console.log("------------------- GFG Optimise APPROACH-------------------")

    let row =0;
    let col = matrix[0].length - 1;

    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] == target) {
           return "Element found at (" + row + "," + col + ")";
        } else {
            //* Keep checking
            if(matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
    }
    return "Element Not found";
}
let GFG_optimise_output = GFG_optimiseSearchMatrix([
    [ 10, 20, 30, 40 ],
    [ 15, 25, 35, 45] ,
    [ 27, 29, 37, 48 ],
    [ 32, 33, 39, 50 ]], 29)
console.log(GFG_optimise_output)
