//https://leetcode.com/problems/find-the-duplicate-number/solutions/127594/official-solution/
//* Find the duplicate number 


const num_array = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
//% 1. ******************  First Approach Sort *********************************************************
       //! Time Complexity: O(nlog⁡n) & Space Complexity: O(1)
function firstApproachFindDuplicateNumber(num_array) {
    let i=0, j;
    while(i < num_array.length) {
        j = i + 1
        while(j < num_array.length) {
            if(num_array[j] < num_array[i]) {
                let temp = num_array[i];
                num_array[i] = num_array[j]
                num_array[j] = temp
            }
            j++;
        }
        i++;
    }
    console.log("Sorted Array: ", num_array)
    for(let i=0; i < num_array.length; i++ ) {
        if(num_array[i] == num_array[i+1]) {
            console.log("du[plicate Number", num_array[i])
            return num_array[i]
        }
    }
}
firstApproachFindDuplicateNumber([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])

//% 2. ******************** Second Approach Hash Map (Recursion and Iterative) *************************
       //! Time Complexity: O(n) & Space Complexity: O(n)
       //^ In hashMap Array each element is equivalenet index to the array number 5 to index i.e 5 nums[5] = 5
function secondApproachFindDuplicateNumber(num_array) {

   function storeIndex(num_array, cur) {
       //* First check the (index = num_array[index]) elemt then will the return the 1st index
        if(cur == num_array[cur])
            return cur;
        //~% Swapping algorithum
        let next = num_array[cur]           //* Next index is the cur elment
        num_array[cur] = cur                //* cur index assign it to array fo cur elemnt
        return storeIndex(num_array, next)  //* Recursion function

        //! Note: Due to recursive  approach we need some extra overhrad on each invocation 
        //! (such as the function variables and a return function pointer that are stored on the system executable stack)
        
   }

   storeIndex(num_array, 0);
}
secondApproachFindDuplicateNumber(num_array)

//% 3. ******************** Binery Serach Tree**********************************************************
       //! Time Complexity: O(nlog⁡n) & Space Complexity: O(1)
       //^ Consider array has [1, n] number ex. [1,2,3,4,5] If we pick any of number these 5 number then count number is less than or qual to it
       //^ Ex. 3 >= (1,2,3) | 2 >= (1) | 4 >= (1, 2, 3) | 5 >= (1, 2, 3, 4, 5) But
       //^ Ex. [4,3,4,5,2,4,1] so here 4 is 4 >= (4, 3, 4, 2, 4, 1)[Count = 6] condition failde and 4 is duplicate number here

function binerySearchTreeFindDuplicateNumber(num_array) {

}
binerySearchTreeFindDuplicateNumber(num_array)

//% 4. ******************** Linked List cycle: Floyd's Tortoise and Hare (Cycle Detection) ****************
        //^ Time Complexity: O(nlog⁡n) & Space Complexity: O(1)
        //^
function OptimalFindDuplicateNumber(num_array) {

    
    

    //% Find the iterscting point of 2 runners
    let tortoise = num_array[0];
    let rabbit   = num_array[0];

    //% Phase 1: rabbit = num_array[num_array[rabbit]] is twice as fast as the tortoise = num_arrays[tortoise] since,
    //% the rabbit goes fast it would be the first to enter the cucle and run around the cycle At some time tortoise
    //% enters the cycle as well, and since it's moving slower the rabbit catch the tortoise point
    //% Tortoise has lost
    do {
        tortoise = num_array[tortoise]            //* Pointer move + 1;
        rabbit   = num_array[num_array[rabbit]]   //* Pointer move + 2;
    } while(tortoise != rabbit)

    //% Phase II: We give a scond chnace to the tortoise by slowing the rabbit so thta it now moved at the spped of tortoise
    //% tortoise = num_array[tortoise]; &&   rabbit   = num_array[rabbit];



    //% Once we find iterscting of tortoise/rabbit pointer
    //% Find entracne to the cycle | we give the tortoise a second chance by slowing down the rabbit, so that it now
    tortoise = num_array[0]
    //% Now start 2nd cycle of it Here we will make it 1st as fast and move one pointer and slow will start from the colision and move +1 pointer

    while(tortoise != rabbit) {
        tortoise = num_array[tortoise];
        rabbit   = num_array[rabbit];
    }

    return tortoise;
}
OptimalFindDuplicateNumber(num_array);


