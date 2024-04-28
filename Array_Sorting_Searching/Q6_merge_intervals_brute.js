//*Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


//* Sort by Bruth Brute-Optimal
//! TC: If not sored the if we want to sort then it will take O(nlogn) and now we are traverse every interval your checking the right which which intervalare 
//! merging to this intervals the you merging the
//! adding to the new dsa O(n*n)

//! SC: O(n)


//% Approach: 
//% 1.  Inxase array is not sorted , sort it this will take nlogn time
//% 2.  Now for every interval, travers the array to check if the intervals can be merged so 
//%     every interval we almost end up traversing the later part of the array which takes the time complexity    
//% 3. We will use the DSA to hold the merged intervals.


let mergedIntervalSort = function(intervals) {
    let n =  intervals.length;
    let i =0;
    let j;
    let sumElm =[]
    for(let k =0; k<n; k++) {
        sumElm.push(intervals[k][0]+intervals[k][1])
    }
    while(i < n) {
        if(intervals[i].length == 2) {
            j = i+1;
            while (j < n) {
                if(sumElm[j] < sumElm[i]) {
                    //* Sorting Merge Interval array 
                    let intervalTemp = intervals[i];
                    intervals[i] = intervals[j];
                    intervals[j] = intervalTemp


                    let tTemp = sumElm[i];
                    sumElm[i] = sumElm[j];
                    sumElm[j] = tTemp
                }
                j++;
            }
            i++;
        }
       
    }
    //console.log(sumElm)
    console.log(intervals)
    let temp =[];
    let pointer = intervals[0]
    for(let i=0; i<n;i++) {
        if(pointer[1] >= intervals[i][0]) {
            if(pointer[0] > intervals[i][0]) {
                pointer[0] =  intervals[i][0]
            }
            if(pointer[1] <= intervals[i][1]) {
                pointer[1] =  intervals[i][1]
            }
            if(i == n - 1) {
                if(temp.length > 0) {
                    if(temp[temp.length-1][0] > pointer[0]) {
                        temp[temp.length-1][0] = pointer[0]
                    }
                    if(temp[temp.length-1][1] < pointer[1]) {
                        temp[temp.length-1][1] = pointer[1] 
                    }
                } else {
                  temp.push(pointer);
                }
            }
        } else {
            temp.push(pointer);
            if(i == n - 1) {
                temp.push(intervals[i]);
            }
            pointer = intervals[i];
        }
    }
    return temp;
   
   
}
console.log("***************************Sort by Bruth Brute-Optimal***********************");
// let sort_1 = mergedIntervalSort([[1,3],[8,10],[2,6],[9, 9],[15,18]])
// console.log("Sort: ", sort_1);
// let sort_2 = mergedIntervalSort([[1,3],[2,6],[8,10],[15,18]])
// console.log("Sort: ", sort_2)
// let sort_3 = mergedIntervalSort([[1,4],[4,5]])
// console.log("Sort: ", sort_3)
// let sort_4 = mergedIntervalSort([[1,4],[0,5]])
// console.log("Sort: ", sort_4)
// let sort_5 = mergedIntervalSort([[2,3],[4,5],[6,7],[8,9],[1,10]])
// console.log("Sort: ", sort_5)
// let sort_6 = mergedIntervalSort([[2,3],[5,5],[2,2],[3,4],[3,4]])
// console.log("Sort: ", sort_6)
let sort_7 = mergedIntervalSort([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])
console.log("Sort: ", sort_7)
