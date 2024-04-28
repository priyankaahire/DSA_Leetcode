
//!TC:
//!SC: 
let merge_sort = function(arr, low, high) {
    //! Recursive function need be stop at some point is called"Bas condition"
    //~* Base condition is, if low and high is equal in that condition we don't need to divide, "please go back"
    if(low >= high) return;
    //% Divide array into 2 part so mid =(low+high)/2
    let mid = parseInt((low+high)/2); //Taking index of arary
    //let mid =low+ parseInt((high-low)/2);
    //low+ parseInt((high-low)/2);
    //% Left side of array divide:
    //* Recursive left side
    merge_sort(arr, low, mid)
    //% Right side of array divide
    //* Recursive Right side
    merge_sort(arr, mid+1, high)
    //% merge the divide array
    //* Merge left side then right side
    merge_array(arr, low, mid, high);
}
function merge_array(arr, low, mid, high) {
    let count = 0
    //% Sorted sorted array elemnt into the temp array
    let temp =[] 
     //% Run the codition still left side array elemnt  && right side array elemnt is finised 
     //% left=  [low...mid]     = low: Left side array start postion && mid: Left side array end
     //% right= [mid+1...high]  = mid + 1 = right side array starting position && high: Right side array end pos

    let left = low;
    let right = mid + 1
    
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++;
        } else {
            temp.push(arr[right])
            right++
        }
    }
   //% If still elemnt left in left
     while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    //% If still element in right
    while(right <= high) {
        temp.push(arr[right]);
        right++;
    }
    console.log("---------------Sorder Array-------------")
    for(let i = low; i<= high; i++) {
        arr[i] = temp[i - low]
        console.log(arr[i])
    }
}
console.log("Merge sort");
let nums = [3, 1, 2, 4, 1, 5, 6, 2, 4]
merge_sort(nums, 0, nums.length - 1)
