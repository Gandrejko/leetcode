const rotate = function(nums, k) {
  if(k > nums.length) {
    k = k % nums.length;
  }
  const end = nums.splice(nums.length - k, nums.length);

  nums.unshift(...end);

  return nums
};

export default rotate;