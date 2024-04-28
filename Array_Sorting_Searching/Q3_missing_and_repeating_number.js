//^ Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} 
//^ is missing and one number occurs twice in the array. Find these two numbers.
/** Examples: 

Input: arr[] = {3, 1, 3}
Output: Missing = 2, Repeating = 3
Explanation: In the array, 2 is missing and 3 occurs twice 

Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: Missing = 5, Repeating = 1 **/

//* Sort Attay and reverse the travel
//% Approach: Sort the input array and Traverse the and check for missing and repeating

//! Time Complexity: O(nLogn)
let firstApproachSort = function(input_array) {
console.log("*********** Sorting Approach ***********8")
let i = 0 ; 
let j;
while(i < input_array.length) { //Print in reverse order
    j = i+1;
    while(j < input_array.length) { // print in sorting order
       //* Here swapping is comparig btween a[i] elment with other element {4} => {4, 3, 6, 2, 1, 1} once  j++  then 
       //* swapping a[j++] with pther elements {3} => {3, 6, 2, 1, 1}
       //* Till  j < input_array.length then i++
       //
        if(input_array[j] < input_array[i]) {
            //* Swapping elment
            let temp = input_array[i];
            input_array[i] = input_array[j];
            input_array[j] = temp;
        }
        j++;
    }
    i++;
}
  for(let i=0; i <input_array.length; i++) {
    if(input_array[i] == input_array[i+1]) {
        console.log("Repaeting Number = ", input_array[i])
    } 
    if(i != 0 && i+1 == input_array[i]) {
        console.log("Missing Number = ", i)
    }
  }
 
}
firstApproachSort([4, 3, 6, 2, 1, 1])

//* Hash mapping (Use count array)
//% Approach : 
//% 1. Need to create the Frequecy array/counting array of arr_length and intaite them by zero.
//% 2. After that need to linearly Traverse the input array arr[], and do the following for each arr[i]
       //% 1. if(count[arr[i] - 1] == 0) count[arr[i] - 1] = 1;
       //% 2. if(count[arr[i] - 1] == 1) output arr[i] repeating number
//%3. Traverse the count[] and output array having value 0 (Missing element)
//! TC: O(n) SC: O(n)
let secondArrpoachHashMapping = function(input_array) {
    console.log("********* Hash mapping (count / Frequency Approach *************8")
    //let max = getMax(input_array);
    let max = input_array.length;
    //% Step1 
    let countArray = new Array(max)
    for(let i=0; i < max; i++){
        countArray[i] = 0;
    }
     //% Step2
    for(let i=0; i <input_array.length; i++) {
        if( countArray[input_array[i] - 1] == 1) {
            console.log("Repeating  Number Number =", input_array[i])
        } else {
            countArray[input_array[i] - 1]++;
        }
    }
    for(let i=0; i <countArray.length; i++) {
        if(countArray[i] == 0) {
            console.log("Missing Number =", i+1)
        }
    }
}
function getMax(input_array) {
    let max = input_array[0]
    for(let i=0; i<input_array.length; i++) {
        if(input_array[i] > max) {
            max = input_array[i]
        }
    }
    return max;
}
secondArrpoachHashMapping([4, 3, 6, 2, 1, 1])


//* Use elements as Index and mark the visited places
//% Approach: This approach is suggested because it is modify existing array and interview don't like to modify existing array
//! TC:  SC: 

//* Use a Map
//% Approach: This method involves creating a Hashtable with the help of Map. In this, the elements are mapped to theri index. In
//% this process, If any elements is mapped twice, then it is repeating element. 
//% and if elements mapping is not there then it is the missing element
//! TC: O(n)  SC: n

let hashMapApproach = function(input_array) {

    console.log("********* Hash mapping Approach *************8")
    let n = input_array.length;
    let numberMap = new Map();

    for(let i of input_array) {
        if(numberMap.has(i) == false) {
            numberMap.set(i, true)
        } else {
            console.log("Repeating =", i)
        }
    }

    for(let i =1; i<=n; i++) {
        if(numberMap.has(i) == false) {
            console.log("Missing Number = ", i)
        }
    }

}
hashMapApproach([4, 3, 6, 2, 1, 1])


//* Make two equations using sum and sum of squares
//% Approach:
   //% 1. Let consider the missing number X and Repeating number Y.
   //% 2. Let N is the size of array and it is [1...N].
   //% 3. Sum of all number using formula s    = 1+2+3+...n = n*(n+1)/2.
   //% 4. Sum of all square of all number S_sq = 1^2 + 1^2 + .... n^2 = n(n+1)(2n+1)/6.
   //% 5. Iterate through a loop from 1...n.
   //% 6. S    = S - a[i].
   //% 7. S_sq = s_sq - (a[i] * a[i]).
   //% 8. It will give us 2 question.
        //^ 1. x-y     = S-(1)
        //^ 2. x^2-y^2 = Sum_sq
        //^ 3. x+y     = (S_sq/S) - (2) = ((S+(s_sq/S))/2)
//! TC: O(n)   SC: O(1)

let sumSquareApproach = function(input_array) {

console.log("***************** sum and sum of squares ********************")
let len     = input_array.length;
let Sum_N   = Math.floor((len * (len + 1)) / 2); //17+(17+1)
let Sum_NSq = Math.floor((len*(len+1)*(2*len+1))/6);

let missingNumber = 0;
let repeating     = 0;

 for(let i=0; i<len; i++) {
    Sum_N   = Sum_N   - input_array[i];
    Sum_NSq = Sum_NSq - (input_array[i] * input_array[i]);
 }

missingNumber = Math.floor(Math.floor(Sum_N + Sum_NSq / Sum_N) / 2);
repeating     = missingNumber - Sum_N;
console.log("Missing Number   = ", missingNumber)
console.log("Repeating Number = ", repeating)
}
sumSquareApproach([4, 3, 6, 2, 1, 1])

//*Using OR Operator:
//% Approach: Quite difficulat to rember
//! TC:  SC: 