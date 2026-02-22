/** @returns Boolean */  
module.exports = function(nums, k) {  
    for(let i = 0; i < nums.length; i++) {
      if(nums.slice(i+1).some(num => nums[i] + num === k)) return true;
    }
    return false;
}