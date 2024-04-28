//! TC: O(N2): worst complexity if array is not sorted because it is checking and swapping the element
//! SC: O(1)


//! TC: O(N): Best complexity is because for soreted one it will definitly not exicute;
let insertion_sort = function(nums) {
    for(let i=0; i<nums.length; i++) {
        //% take elemnt and swap till reach at right place so exiction till j > 0 not j>= 0 because
        //% if j = 0 and emenet before is j -1 i.e 0-1 is [-1] and it will be index out of bound error
        let j = i
        while(j>0 && nums[j-1] > nums[j]) { //% left side element is big then swap with current elemnt
            let temp = nums[j];
            nums[j] = nums[j-1];
            nums[j-1] = temp;
            j--; //% Lt's move to the left one step
            console.log("pass", j) 
        }
       
    }
    return nums;
}


console.log("insertion_sort");
let output = insertion_sort([3,4,7,1,9,2])
console.log(output)
let output2 = insertion_sort([1,2,3,4,5,6])
console.log(output2)


let recursive_insertion_sort = function(nums) {

}


let name = function(i, n) {
    if(i>= n) return ;
    console.log("Priyanka")
    name(i+1, n)
}
name(0, 10)