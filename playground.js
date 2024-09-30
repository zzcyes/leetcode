/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0
    white(i<nums.length){
     if(nums[i]===val){
         var next = nums[i+1];
         nums[i+1] = nums[i]
         nums[i] = next;
     }
    }
 };