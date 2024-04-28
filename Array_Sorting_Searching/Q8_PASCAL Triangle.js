//* Given an integer numRows, return the first numRows of Pascal's triangle.
//* In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


//% 1. Example 1 : Display the pascal traingle on basis of rows

let generate = function(numRows) {

    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let pascal_result = [];
    for (let row = 0; row < numRows; row++) {
        let arr = [];
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                arr.push(1);
            } else {
                arr.push((pascal_result[row-1][col-1] + pascal_result[row-1][col]));
            }
        }
        pascal_result.push(arr);
    }
    return pascal_result;
}

let output = generate(5);
console.log(output)


let findElement = function(numRows, noCol) {
    console.log()
    let C = noCol - 1;
    let R = numRows - 1;
    let res = 1;
    if (numRows === 0) return [];
    if (numRows === 1) return [1];
    for(let col = 0; col < C; ++col ) {
        res = res * (R - col)
        res = res / (col + 1);
    }
    return res;
}
let elementFound = findElement(5, 3);
console.log(elementFound);

let findLastRow = function(numRows) {
    //* No. of Row == Col no col
    let R = numRows - 1;
    let res = 1;
    let nthRowResult = [1];
    if (numRows === 0) return [];
    if (numRows === 1) return [1];
    for(let row =0; row < R; ++row) {
        res = res * (R - row)
        res = res / (row + 1);
        nthRowResult.push(res)
    }
    return nthRowResult;
}
let findNthRow = findLastRow(5);
console.log(findNthRow);
let findNthRow1 = findLastRow(1);
console.log(findNthRow1);
let findNthRow3 = findLastRow(3);
console.log(findNthRow3);