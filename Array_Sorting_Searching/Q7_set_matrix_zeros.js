//*Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// Input: matrix =   [[1,1,1],
//                    [1,0,1],
//                    [1,1,1]]
// Output:            [[1,0,1],
//                     [0,0,0],
//                     [1,0,1]]
//% 1. Approach:
    //% 1. Linerally iterate over the matrix and 
    //% 2. Replace all zero by -1 (Consideration is matrix will be postive number) and even shoul not replace the 
    //% 3. Now start once again iteration form the botton of the matrix becase 1sr row now is set as "-1" now, will check 0'th row columns has -1 then will replace the current postion item by -1
    //% 4. Now will make all -1 to the zero 
//! TC: O(N x M) x (N + M)
    //!(N x M) =  Linerally traversing in the array
    //! (N + M) = and for every traversal you have to traverse to the entire row and entire column

//! SC: 0(1) = Becuase we are doingchnages in the given array
let first_approach = function(matrix) {
    let n = matrix.length;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let setEle = -1
    console.log("------------ 1st First Approach Input Matrix ----------------------")
    
    //* Making first row set as -1
    for(let i=0; i<rows; i++) {
        for(j=0; j<cols; j++){
            if(matrix[i][j] == 0 && matrix[i][j] != -1) {
                matrix[i][0] =  matrix[0][j] = setEle
            }
        }
    }
    //* Now it will all rows from the below
    for(let i = rows - 1; i >=0; i--) {
        for(let j = cols - 1; j>=0; j--) {
            if(matrix[0][j] == -1) {
                matrix[i][j] = setEle
            }
        }
    }
    //* Make it all -1 to the 0
    for(let i=0; i<rows;i++) {
        for(let j=0; j<cols;j++) {
            if( matrix[i][j] == -1) {
                matrix[i][j] = 0;
            }
        }
        console.log(matrix[i])
        console.log("\n")
    }
}
// first_approach([[1,1,1],[1,0,1],[1,1,1]])
// first_approach([[0,1,2,0],[3,4,5,2],[1,3,1,5]])



//% 2. Approach: It is just the optimazation of first approach
       //% 1. Creation of 2 dummay array with the size of row and column
       //% 2. Iterate over the array and once u find the element as zero at maxtrix[i][j] = 0 then mark dumm_row[i] = 0 and dummy_col[j] = 0
       //% 3. Now ietrate ove the matrix and check the dummy_row and dummy_col at same postion of you find zero at dummy_rows[i] || dummy_col[j] then set the matrix[i][j] = 0
//! TC: O(N X M + N X M): Because we linerlly trverse array twice
//! SC: O(N) + O(M) = Because we are using 2 dummy array to store value
let second_approach = function(matrix) {
    let n = matrix.length;
    let rows = matrix.length;
    let cols = matrix[0].length
    let dummy_col = new Array(cols);
    let dummy_rows = new Array(rows);
    console.log("------------ 2nd Second Approach Input Matrix ---------------------")

    //* While ietrating if we find the single
    for(let i =0; i < rows; i++) {
        for(let j=0; j<cols; j++) {
            if(matrix[i][j] == 0) {
                dummy_col[j]   = 0
                dummy_rows[i]  = 0
            }
        }
    }
    for(let i =0; i< rows; i++) {
        for(let j =0; j<cols; j++) {
                if(dummy_rows[i] == 0 || dummy_col[j] == 0 ) {
                    matrix[i][j] = 0
                } 
        }
    console.log(matrix[i]);
    console.log("\n");
    }
}
// second_approach([[1,1,1],[1,0,1],[1,1,1]])
// second_approach([[0,1,2,0],[3,4,5,2],[1,3,1,5]])



//% 3. Approach: Brute-Better optimal
//% 1. Instead of taking 2 dummy array explicityly we will take 2 dummy array inside the 2D matrix so that we will do,
//% 2. We will take first row    as    2D column Dummy array = Matrix[0]
//% 2. We will take first column as 2D row Dummy array = Matrix[j][0]
//% 3. We will take var as col will set as true i.e col = true why we are doing this
//! TC: 2(N X M): Because you traverse the matrix twice
//! SC: O(1)
let optimise_approach =  function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length
    let col0 = 1 //True
    console.log("------------------ 3rd Third Approach Input Matrix  --------------------")
    console.log(matrix);
    for(let i=0; i<rows;i++) {
        if(matrix[i][0] == 0) col0 = false ; // we set 1st emenet of 1st row as false
        for(let j=1; j<cols;j++) { // From the 1st 
            if( matrix[i][j] == 0) {
                matrix[i][0] = matrix[0][j] = 0; // set left most guy as 0 and top most guy as 0
            }
        }
    }
    //* linerally traverse from the backwoard and check 
    for(let i = rows -1; i >=0; i--) {
        for(let j = cols -1 ; j >=1; j--) { // end the 1st position not at the 0'th postion
            if(  matrix[i][0] == 0 || matrix[0][j] == 0) { // I am check if dummay value is zero at any on the given index 
                matrix[i][j] = 0; // I set as i, j = 0
            }
        }
        if(col0 == 0) matrix[i][0] = 0; // Checking if col is false then set it the zero'th column set to false because its mean is
        console.log(matrix[i]);
        console.log("\n");
    }
}
optimise_approach([[1,1,1],[1,0,1],[1,1,1]])
optimise_approach([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
