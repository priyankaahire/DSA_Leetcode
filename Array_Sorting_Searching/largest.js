var longestCommonPrefix = function(strs) {
    let large_prefix = "";
    if(strs.length == 0) return large_prefix
    if(strs.length == 1) return strs[0];
    large_prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(large_prefix)){
            large_prefix = large_prefix.slice(0, -1)
        }
    }
   
    return large_prefix
};
longestCommonPrefix(["flower","flow","flight"])


