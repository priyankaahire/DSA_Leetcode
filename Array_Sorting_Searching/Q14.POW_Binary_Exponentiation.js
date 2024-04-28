/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Input: x = 2.00000, n = 10
Output: 1024.00000
Input: x = 2.10000, n = 3
Output: 9.26100
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:

-100.0 < x < 100.0
-2^31 <= n <= 2^31-1
n is an integer.
-104 <= xn <= 104

*/
//! TC: O(N) becuase linerally traverse the n-1
//! SP: O(1) not using any extra space
//%Note:  
//% n : if((-100.0 < x < 100.0)  && (-2147483648 <= n <= 2147483648-1)) condition is very importnat because rang of postive and negative
        //% Integer is in between -2147483648 <= n <= 2147483647 otherwise we have to stored in long, double etc
//% x:  X should be in between 100 to -100 becuase it is an interger not double and long
var myPow = function(x, n) {
    console.log("------------------- FIRST APPROACH-------------------")
    if((-100.0 < x < 100.0)  && (-2147483648 <= n <= 2147483648-1)) {
        if(n==0 || x==1)
            return 1;
        if(x==0)
            return 0;
        if(n<0){
            //* Recursive Approach
            //return myPow(1/x,(-1*n));

            //* Non Recursive Approach
            let pow = 1/x;
            n = -1*n
            for(let i=0; i<n-1; i++) {
              pow = pow*(1/x)
            } 
            return pow
            
        }
        if(n>0) {
            //* Recursive Approach
            //return (n%2==0 ? myPow(x*x,n/2) : x*myPow(x*x,n/2));
            
            //* Non Recursive
            let pow = x;
            for(let i=0; i<n-1; i++) {
              pow = pow*x
            } 
            return pow
            
        }
    }
    return 0
};
// let c2 = myPow(1, -2147483648);
// console.log(c2)
// let c = myPow(2.00000, -2);
// console.log(c)

//% Optimosation of Appraoch: 
//% If power is even we multiple x * x and divided by n/2
//% If power is odd we multiple x * x/n-1

//! TC: logarithmic base to n log base n
//! SC: O(1)
let optimise_myPow = function(x, n) {
    console.log("------------------- OPTIMISE APPROACH-------------------")
    if((-100 < x < 100) && (-2147483648 <= n <= 2147483647)) {
        if(n==0 || x==0) return 1;
        if(x==0) return 0
        if(n<0) {
            return myPow(1/x,(-1*n));
        }
        if(n>0) {
            console.log(x+" : "+n)
            return n%2 == 0 ? optimise_myPow(x*x, n/2) :  x*optimise_myPow(x, n-1)
        }
    }
    return 0;
}
let c5 = optimise_myPow(2, 10);
console.log("optimise_myPow:", c5)
// let c3 = optimise_myPow(1, -2147483648);
// console.log(c3)
// let c4 = optimise_myPow(2.00000, -2);
// console.log(c4)