/**
 * Given a set of N jobs where each jobi has a deadline and profit associated with it.
Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with job if and only if the job is completed by its deadline.
Find the number of jobs done and the maximum profit.
Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job.

Input:
N = 4
Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}
Output:
2 60
Explanation:
Job1 and Job3 can be done with
maximum profit of 60 (20+40).


Input:
N = 5
Jobs = {(1,2,100),(2,1,19),(3,2,27),
        (4,1,25),(5,1,15)}
Output:
2 127
Explanation:
2 jobs can be done with
maximum profit of 127 (100+27).
 * 
 * 
 * 
 * 
 */

//* Greedy Algo
//% Appraoch:
     //% 1.
     //% 2.
     //% 3.
     //% 4.

//! TC: O(NlogN) = Sorth the array + O(n*m)
//! SC: O(N)
let  JobScheduling = function(arr, n) {

    let max =0;
    arr = arr.sort((a, b) => b[2]-a[2]);
    console.log(arr);
    //% Finding the length of counting_array
    for(let i=0; i<n; i++) {
        console.log(i)
        if(arr[i][1] > max) {
          max =  arr[i][1]; 
        }
    }
    let count_arr = new Array(max)
    //% Creation of Counting array with -1
    for(let i=0; i<max; i++) {
        count_arr[i] = -1;
    }
    console.log(count_arr);
    //% 
    let count_job =0;
    let profit = 0;

    for(let i=0; i<n;i++) {
        for(let j=arr[i][1]; j>0; j--) {
            if(count_arr[j] == -1) {
                count_arr[j] = i;
                count_job++;
                profit += arr[i][2]
                break;
            }
        }
    }
    console.log(count_arr);
    console.log(count_job, profit)
    return [count_job, profit]

}

let o = JobScheduling([[1,4,20],[2,1,10],[3,1,40],[4,1,30]], 4)