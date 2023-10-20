/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * 
 *  Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 
 */

    
//* Brute Force
//!TC: O(N3) => O(N2)
//!SC: O(N) : need to be check for repeacting char required hashset for that
let first_lengthOfLongestSubstring = function(s) {
    let n = s.length;
    if(n == 0) return 0;
    if(n==1) return 1;
    let output =0;
    for(let i=0; i<n;i++) {
        for(let j=i; j<n;j++) {
            if(checkRepetition(s, i, j)) {
                console.log(":", i, j)
                let index = j - i + 1//% start -  end + 1 = current length of substring
                if(output < index) {
                    output = index
                }
            }
        }
    }
    return output
};
function checkRepetition(s, start, end) {
        let charSet = new Map()
        for(let i=start; i<=end; i++) {
            let c = s.charAt(i);
            if(charSet.get(c) != undefined) {
                return false;
            }
            charSet.set(c, 1)
        } 
        console.log(charSet)
    return true;
}
// let o = first_lengthOfLongestSubstring("abcabcbb")
// console.log(o)
// let o1 = first_lengthOfLongestSubstring("bbbbb")
// console.log(o1)
// let o2 = first_lengthOfLongestSubstring("pwwkew")
// console.log(o2)
// let o3 = first_lengthOfLongestSubstring("au")
// console.log(o3)

//! Optimise the above sloution and make it O(n2)



//* Sliding window
//% Approach:
//!TC: O(2N) = O(N) + O(N)
//!     O(N): l pointer visting each and every elemnet
//!     O(N): r pointer visting each and every elemnet
//! SC: O(N) : using set to stored the string
let slingwindow_lengthOfLongestSubstring = function(s) {
    let n = s.length;
    if(n == 0) return 0;
    if(n==1) return 1;
    let sub_len =0;
    let coll = new Map();
    let left =0;
    let right = 0
   while(right < n) {
        if(coll.has(s.charAt(right))) {
            //% [l-r] there is repeating element i.e this sub string with repeating
            //% so we need to remove the repeating char so will remove left from the set first
            //% then move left pointer 1 step ahead
           
            //left++;
            coll.delete(s.charAt(left));
            left++
            if(!coll.has(s.charAt(right))) {
                coll.set(s.charAt(right), right);  
            }
        } else {
            //% [l-r] there is no repeating element i.e this sub string without repeating i.e r - l + 1
            coll.set(s.charAt(right), right);
        }
        console.log("left before delte: ", right , left)
        if(sub_len < (right - left + 1)) {
            sub_len = (right - left + 1)
        }

        console.log(coll)
        console.log("len: ", sub_len)
        right++
    }
    return sub_len;
}
let o = slingwindow_lengthOfLongestSubstring("abcabcbb")
console.log(o)
let o1 = slingwindow_lengthOfLongestSubstring("bbbbb")
console.log(o1)
let o2 = slingwindow_lengthOfLongestSubstring("pwwkew")
console.log(o2)
// let o4 = slingwindow_lengthOfLongestSubstring("au")
// console.log(o4);
// let o11 = slingwindow_lengthOfLongestSubstring("a")
// console.log(o11)
// let o12 = slingwindow_lengthOfLongestSubstring("")
// console.log(o12)

//* HashMap
//%Approach:
//!TC: O(N)
//!SC: O(N)
let lengthOfLongestSubstring = function(s) {
    let n = s.length;
    if(n == 0) return 0;
    if(n==1) return 1;
    let sub_len = 0;
    let collection = new Map();
    let left = 0
    let right = 0
    while(right < n) {
        if(collection.get(s.charAt(right)) != undefined) {
            //% Found into the set
            if(left < collection.get(s.charAt(right)) + 1 ) {
                left = collection.get(s.charAt(right)) + 1
            }
            collection.set(s.charAt(right), right) 
        } else {
            //% Not found into the set
            collection.set(s.charAt(right), right);
        }
        if(sub_len < (right - left + 1)) {
            sub_len = right - left + 1
        }
        right++;
    }
    return sub_len;  
}

// let o5 = lengthOfLongestSubstring("abcabcbb")
// console.log(o5)
// let o6 = lengthOfLongestSubstring("bbbbb")
// console.log(o6)
// let o7 = lengthOfLongestSubstring("pwwkew")
// console.log(o7)
// let o8 = lengthOfLongestSubstring("au")
// console.log(o8)
// let o9 = lengthOfLongestSubstring("a")
// console.log(o9)
// let o10 = lengthOfLongestSubstring("")
// console.log(o10)
