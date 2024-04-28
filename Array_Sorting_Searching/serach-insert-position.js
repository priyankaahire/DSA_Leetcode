var searchInsert = function(nums, target) {
    let n = nums.length;
    for(let i =0; i <n; i++) {
        while(nums[i] >= target) {
            return i;
        } 
        if(i == (n-1) && nums[i] <= target) {
            return ++i;
        }
    }
};
// let j = searchInsert([1,3,5,6], 2)
// console.log(j)
// let c = searchInsert([1,3,5,6], 5)
// console.log(c)
// let d = searchInsert([1,3,5,6], 7)
// console.log(d)


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length == 0 && needle.length == 0) return -1
    let pos =  haystack.indexOf("", 0)
    console.log(pos)
};

// let g = strStr("leetcode", "leet")


var isValid = function(s) {
    let len = s.length;
    var stack = [];
    if(len == 1 || len == 0) return false
    for(let i=0; i<len;i++)  {
        if(s[i] == "[" || s[i]=="{" || s[i] == "(" ) {
            stack.push(s[i])
        }
        else 
        {
            if(stack.length == 0) return false;
            //* peek == first elment of array
            if( (s[i] == ")" &&  stack.peek == "(") ||
                 (s[i] == "]" && stack.peek == "[") ||
                 (s[i] == "}" && stack.peek == "{")) return false;
            
            else stack.pop();
        }
    }
   //* It will always return if stack is empty;
    if(stack.length == 0) return true;
    //* IF no closing is find only opening
    return false;
  };
  
//   let c4 =isValid("{[]}");
//   console.log(c4)
//   let f = isValid("()[]{}");
//   console.log(f)
//   let c2 = isValid("[((]");
//   console.log(c2)


  var isPalindrome = function(x) {
    if(x < 0) return false;
    let rem, final = 0
    let temp = x; // real value stored into the temp variable
    while(x > 0) {
        rem = x%10;
        x = parseInt(x/10);
        final = final*10+rem;
    }
    if(temp == final) return true
    else return false;
    /*
    String palindrome
    let len = x.length;
    for(let i=0; i<len/2; i++) {
        let forward_chat = x[i] //forward character
        let backword_chat = x[len - i] // Backword charachter
        if(forward_chat != backword_chat) {
            return false;
        }
    }
    return true;
    */
};
let c =isPalindrome(121);
console.log(c)

var lengthOfLastWord = function(s) {
    let trim_str = s.trim()
    if(trim_str.length == 1) return 1;
    if(trim_str.length > 0) {
        for(let i = trim_str.length; i > 0; i--) {
            if(trim_str[i] == " ") {
                let index = ((trim_str.length - 1) - i);
                return index;
            }
        }
        return trim_str.length;   
    }
};
lengthOfLastWord("Hello World")

var plusOne = function(digits) {
    let sum = 0;
    let i = 0;
    while(i < digits.length) {
        if(digits[i]<9){
        }
        sum += digits[i];
        i++;
    }
    sum++;
    console.log(sum)
}

let d = plusOne([9])
console.log(d)