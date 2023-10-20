/*
    Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
    Consider that all the trains arrive on the same day and leave on the same day. 
    Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. 
    At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, 
    we need different platforms.

    Input: n = 6 
    arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
    dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
    Output: 3
    Explanation: 
    Minimum 3 platforms are required to 
    safely arrive and depart all trains.
*/
//! TC: O(2logn) + O(2N) 
//! SC: O(1)
let findPlatform = function(arr, dep, n) {
    arr=  arr.sort((a, b) => a - b);
    dep = dep.sort((a, b) => a - b);
    console.log(arr)
    console.log(dep)
    let no_of_platform = 1;
    let max_plaform = 1;
    let j =0; 
    let i = 1 //! Start from one because by defulat 0th position alreday required one platform
    while(i < n && j < n) {
        if(arr[i] <= dep[j]) {
            //% If arrival train is coming before the depature train i can say platform is required    
            no_of_platform++;
            i++;
        } else if(arr[i] > dep[j]) {  
            //% But If detatural train is move before the arriavl train i can say we will using emty platform
            no_of_platform--;
            j++;
        }

        if(no_of_platform > max_plaform) max_plaform = no_of_platform
    }
    return max_plaform;
}
let o = findPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000], 6)
console.log(o)
let o2 = findPlatform([900, 1100, 1235], [1000, 1200, 1240], 3)
console.log(o2)