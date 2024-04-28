/*
Given weights and values of N items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
Note: Unlike 0/1 knapsack, you are allowed to break the item. 

Input:
N = 3, W = 50
values[] = {60,100,120}
weight[] = {10,20,30}
Output:
240.00
Explanation:Total maximum value of item
we can have is 240.00 from the given
capacity of sack. 


N = 2, W = 50
values[] = {60,100}
weight[] = {10,20}

Output:
160.00
Explanation:
Total maximum value of item
we can have is 160.00 from the given
capacity of sack.

*/
let fractinal_knapsack = function (W, arr, n) {

    //Find per unit value
    // then sort the unit value array

    //start picking one by one and check the condition
    //once u push your weight into the stack store summetion inside one varibale

    let sort_input = findPerItem(arr, n)
    let current_weight = 0;
    let final_value = 0;

    for (let i = 0; i < n; i++) {

        if (current_weight + sort_input[i].weight <= W) {
            current_weight = current_weight + sort_input[i].weight;
            final_value    = final_value + sort_input[i].value
        } else {
            let remain_item = W - current_weight;
            final_value = final_value + ((arr[i].value / arr[i].weight) * remain_item)
            //* Bsically we are breaking the exicution because we are alreday taking fraction of item
            return final_value;
        }
    }
    return final_value;
}
let c = fractinal_knapsack(50, [{"weight":10, "value":60},{"weight":20, "value":100},{"weight": 30, "value": 120}], 3)
let d = fractinal_knapsack(50, [{"weight":10, "value":60},{"weight":20, "value":100}], 2)
console.log(c, d)
function findPerItem(arr, n) {
    let i = 0;
    let j;
    while (i < arr.length) {
        j = i + 1;
        let p = arr[i].weight / arr[i].value;
        if (j < arr.length) {
            let c = arr[j].weight / arr[j].value;
            if (c < p) {
                let temp = arr[i]
                arr[i] = arr[j];
                arr[j] = temp
            }
            j++;
        }
        i++;
    }
    console.log(arr)
    return arr;
}
