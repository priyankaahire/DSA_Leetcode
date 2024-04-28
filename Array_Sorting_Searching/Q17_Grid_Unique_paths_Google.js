/*

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.


Input: m = 3, n = 7
Output: 28


Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down


Constraints:
1 <= m, n <= 100

*/
//* Appraoch: 1 : Brute Force solution
//! TC: O(n) * O(m)
//! SC: O(N2)

let first_uniquePaths = function(m, n) {

}

//* Appraoch: 2 : Recursive Solution -> Dynamice Programming soln
//! TC: O(N * M) : at max: m*n state : 
//! SC: O(N * M) : Hash table and Recursive will take N*M
let second_uniquePaths = function(m, n) {

}


  

//* Appraoch 3 : Optimise one
//% Observation are important in this case
    //% *. Need to find the similarities is,
            //% Observation 1. Always find the 3 steps to reachout the finisher i.e start -> end taking 3 steps:
                    //% If if m (row) is 3 you need then you will take no of steps m == no.of step right (m-1)  (NO Of Right)
                       //% and 
                    //% If n = 2 then  no of steps bottom == n -1 (NO Of Bottom)
                    //% No fo total Direaction I need to reach = (m -1) + (n -1) = m + n + 2
                    //%                                        =  3 - 1 + 2 - 1 = 2 + 1 = 3


           //% Observation 2. Since, you move start to end always yu have to move take certain no.of Right and certain no.of Bottom to reach out otheriwse you won't be reach out the end
                    //% 3 boxes i need to be feel the combination 
                    //% nCr => Right: nCm-1 || Bottom: nCn-1 
                        //Ex : 3C2 || 3C1
                        //% Path: nCm-1 = (m+n-2)Cm-1 = 3C2 = R -> R -> B
                        //%                                   R -> B -> R
                        //%                                   B -> R -> R  ...................Now we have m+n-2 direaction C among that I'm able to place the right pass
                        
                        //% Path: nCm-1 = (m+n-2)Cn-1 = 3C1 = B -> R -> R
                        //%                                   R -> B -> R
                        //%                                   R -> R -> B ....................Now we have m+n-2 direaction C among that I'm able to place the Bottom pass

                        //% 
                   

//! TC: O(m - 1) || O(n - 1)
//! SC: O(1)
let uniquePaths = function(m, n) {
    console.log("-------------------- Optimise Approach --------------------------")
    //% m: consider as row
    //% n: consider as col

    //% Formula = nCr = n! / r! * (n – r)!

    //nCr = m+n-2Cm-1 or m+n-2Cn-1
    let N = m+n-2; //OR N  =  m+n-2
    let r = m -1   //OR  r =  n - 1

    let no_of_paths = 1;
    for(let i=1; i<= r; i++) {
        no_of_paths = no_of_paths * (N - 1 + i) / i;
    }
    return no_of_paths
}
let optimise_output = uniquePaths(3, 2);
console.log(optimise_output)

