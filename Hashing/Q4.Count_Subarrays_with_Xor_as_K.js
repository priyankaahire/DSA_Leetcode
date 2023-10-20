/*
    Given an array of integers arr[] and a number m, count the number of subarrays having XOR of their elements as m.
    Examples: 

    Input : arr[] = {4, 2, 2, 6, 4}, m = 6
    Output : 4
    Explanation : The subarrays having XOR of 
                their elements as 6 are {4, 2}, 
                {4, 2, 2, 6, 4}, {2, 2, 6},
                and {6}

    Input : arr[] = {5, 6, 7, 8, 9}, m = 5
    Output : 2
    Explanation : The subarrays having XOR of
                their elements as 5 are {5}
                and {5, 6, 7, 8, 9}

*/


//* Bruth force solution
//!TC: O(N3) => O(N2)
//!sc: o(1)
let firstsubarrayXor = function(arr, n, m) {
    let count = 0;
    for(let i=0; i<n; i++) {
        let xOR = 0;
        for(let j = i; j<n; j++) {
            xOR = xOR ^ arr[j]
            if(xOR == m) {
                count++;
            }
        }

    }
    return count++
}

let o1 = firstsubarrayXor([ 5, 6, 7, 8, 9 ], 5, 5);
console.log(o1)


//* Hashset  solution
//!TC: O(nlogn)
//!SC: O(n)
let subarrayXor = function(arr, n, m) {
 
    let xOR = 0;
    let count = 0;
    let frequencyArr = new Map()
    for(let i=0; i<n; i++) {
        //% xOR = y ^ k
        xOR = xOR ^ arr[i]
        //% y = xOR ^ k
        //% now check y is exist in hashset or not
        if(frequencyArr.get(xOR ^ k) != undefined) {
            count += frequencyArr.get(xOR ^ k)
        }
        if(xOR == m) {
            count++;
        }
        //% now check xor is exist in hashset or not
        if(frequencyArr.get(xOR) != undefined) {
            frequencyArr.set(xOR, frequencyArr.get(xOR) + 1) //% Increament the hasset count
        } else {
            frequencyArr.set(xOR, 1) ////% push into the hasset with count 1
        }
    }

    return count;
}
let o = subarrayXor([ 5, 6, 7, 8, 9 ], 5, 5);
console.log(o)