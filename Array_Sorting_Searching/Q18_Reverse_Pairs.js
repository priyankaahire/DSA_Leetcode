let reverse_pair = function(nums) {
    let n = nums.length;
    let count = 0;
    for(let i=0; i<n; i++) {
        for(j = i+1 ; j < n; j++) {
            if(nums[i]>2*nums[j]) {
                count++;
            }
        }
    }
    return count;
}

let c = reverse_pair([2,4,3,5,1])

let reverse_pair_merge_sort = function(nums) {
    return merge_sort(nums, 0, nums.length - 1)
}
function merge_sort(arr, low, high) {
    if(low>= high) return 0; //! If it is single element i return 0
    let mid = parseInt((low+high)/2)
    let inv = merge_sort(arr, low, mid);
    inv += merge_sort(arr, mid+1, high);
    inv += merge_array(arr, low, mid, high)

    return inv
}
function merge_array(arr, low, mid, high) {
    let temp = [];
    let count = 0;
    let left = low;
    let right = mid + 1;
    let j = mid+1
    console.log("arr", arr)
    for(let i=low; i<= mid; i++) {
        while(j<=high && arr[i] > 2*arr[j]) {
            console.log(j)
            j++;
        }
        count += (j - (mid+1))
    }
    console.log("count", count)
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while(right <= high){
        temp.push(arr[right])
        right++;
    }
    for(let i = low; i<= high; i++) {
        arr[i] = temp[i - low]
    }
 
   return count;
}

let d = reverse_pair_merge_sort([2,4,3,5,1])
console.log(d)