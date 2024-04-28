//! TC: O(N2)
//! SC: O(1)

//! But it might be O(n) if array is sorted and we used the flag logic
let bubble_Sort = function(nums) {
    let n = nums.length;
    let isSwap = 0
    for(let i=0; i<n;i++) {
        isSwap = 0
        for(let j=0; j<n; j++) {
            if(nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                isSwap = 1
            }
        }
        console.log("pass",i)
        if(isSwap == 0) {
            break;
        }
        
    }
    return nums;
}


console.log("Bubble sor");
let output = bubble_Sort([3,4,7,1,9,2])
console.log(output)
let output2 = bubble_Sort([1,2,3,4,5,6])
console.log(output2)


let recursive_bubble_sort = function(nums) {
    
}