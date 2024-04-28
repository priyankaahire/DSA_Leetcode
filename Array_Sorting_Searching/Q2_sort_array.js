//* Sort an array of 0's 1's & 2's without using extra space or sorting Algo
//* Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//* We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//* You must solve this problem without using the library's sort function.


const inputs_first = [2,0,2,1,1,0];

//% Sort the array

var sortFunction = function(input_array) {
    let i = 0 ; 
    let j;

    while(i < input_array.length) {
        j = i+1
        while(j < input_array.length) {
            if(input_array[j] < input_array[i]) {
                let temp = input_array[i];
                input_array[i] = input_array[j];
                input_array[j] = temp;
            }
            j++;
        }
        i++;
    }
    return input_array;
}
let o1 = sortFunction(inputs_first);
console.log("o1 ", o1)


//% Count inserting algorithum
const input_second= [2,0,0,1,1,0];
var countingSort = function(input_array) {

    //* First we will get the max number from the aarray
     //! 0(N) TIME TO getMax
    let maxNumber   = getMax(input_array) 
   
    let n           = input_array.length;
    let sortedArray = new Array(n)
    let countArray  = new Array(maxNumber)

    //* Initialize count array with 0: 
    //! O(M) time TO and take O(M) space
    for (let i=0; i <= maxNumber; i++) {
        countArray[i] = 0;
    }
    //* Store the count of each element

    //! O(N) time TO mapping 
    for (let i=0; i < n; i++) {
        countArray[input_array[i]]++;
    }
   
    //* Calculating prefix sum at every index
    for(let i=1;i<=maxNumber;i++) {
        countArray[i]+=countArray[i-1];
    }

    //* This loop will find the index of each element of the original array in count array, and place the elements in output array
  
    for (let i = n - 1; i >= 0; i--) {  
        let index = countArray[input_array[i]] - 1;
        sortedArray[index] = input_array[i];  
        --countArray[input_array[i]];
    }  

    //* Store the sorted elements into main array  

    for(let i = 0; i< n; i++) {  
        input_array[i] = sortedArray[i]; 
    }
   return input_array;
}
let o2 = countingSort(input_second);
console.log("o2 ", o2)

function getMax(input_array) {
    let max = input_array[0]
    for(let i=0; i<input_array.length; i++) {
        if(input_array[i] > max) {
            max = input_array[i]
        }
    }
    return max;
}
//% Dutch national flag algorithum
const input_third= [2,0,0,1,1,0];

let optimalSortArray = function(input_array) {
      //!  Making sortedArr will take O(N+M) && take O(N) space 0(n) and o(1)
    let n = input_array.length;
    let low  = 0;
    let mid  = 0;
    let high = n - 1
    if(input_array[mid] == 0) {
        let temp         = input_array[low];
        input_array[low] =  input_array[mid];
        input_array[mid] =  temp;
        mid++;
        low++;
    }
    if(input_array[mid] == 1) {
     mid++;
    }
    if(input_array[mid] == 2) {
        let temp = input_array[high];
        input_array[high] = input_array[mid];
        input_array[mid]  = temp
        high--;
    }
 return input_array
}
let o3 = optimalSortArray(input_third);
console.log(o3)
