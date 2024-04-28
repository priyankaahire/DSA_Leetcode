


/* 
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. 
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

 
/**
 * 
 * @param {*} matrix 
 */
//! TC: O(N2) + O(N2)
//! SC: O(N): We are using any extra array 
let rotate_image = function(matrix) {
    console.log("---------------------- First Approach Rotate Image -------------------------")
    let n = matrix.length = matrix[0].length;
    let rotate_image_matrix = []
    if(1 <= n <= 20) {
        //creating two dimensional rotate_image_matrix
        for (let i = 0; i< n; i++) {
            for(let j = 0; j< n; j++) {
                rotate_image_matrix[i] = [];
            }
        }
        // inserting elements to rotate_image_matrix
        console.log(rotate_image_matrix)
        for(let row=0; row <n; row++) {
            for(let col=0; col<n; col++) {
                rotate_image_matrix[col][n-row-1] = [];
                if(-1000 <= matrix[row][col] <= 1000) {
                    rotate_image_matrix[col][n-row-1].push(matrix[row][col])
                }
            }
        }
    } 
    return rotate_image_matrix;
}
let rotate_matrix = rotate_image([[1,2,3],[4,5,6],[7,8,9]])
console.log(rotate_matrix)

/**
 * 
 * @param {*} matrix 
 */
//% Tranpose Matrix: Row becomes column and columns become row
//% 1. Swap the element like matrix[i][j] = matrix[j][i]
//% 2. Revers the row of matrix
//! TC: O(N2) + O(N2)
//! SC: O(1): We are not using any extra array 
let rotate_image_optimise = function(matrix) {
    console.log("---------------------- Optimise Rotate Image -------------------------")
    let n = matrix.length = matrix[0].length;
    console.log("-------------- Input ---------------")
    console.log(matrix)
    if(1 <= n <= 20) {
        for(let i=0; i<n; i++) {
            for(let j=0; j<i; j++) {
                let temp     = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }

        }
        console.log("-------------- Swap ---------------")
        console.log(matrix)
        for(let row=0; row <n; row++) {
            for(let col=0; col<n/2; col++){
                //* Print revere matrix
                let temp =0;
                temp = matrix[row][col];
                matrix[row][col] = matrix[row][n-1-col];
                matrix[row][n-1-col] = temp;
            }
        }
    }
    console.log("-------------- output ---------------")
    console.log(matrix)
}
let rotate_image_optimise_output2 = rotate_image_optimise([[1,2,3],[4,5,6],[7,8,9]])
console.log(rotate_image_optimise_output2)
let rotate_image_optimise_output1 = rotate_image_optimise([[1,2],[3,4]])
console.log(rotate_image_optimise_output1)
let rotate_image_optimise_output = rotate_image_optimise([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
console.log(rotate_image_optimise_output)
let rotate_image_optimise_output3 = rotate_image_optimise([[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]])
console.log(rotate_image_optimise_output3)
