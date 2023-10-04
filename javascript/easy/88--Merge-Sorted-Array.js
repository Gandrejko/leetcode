import { expect } from 'chai';
const merge = function(nums1, m, nums2, n) {
  for(let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a - b);

  return nums1;
};

describe("Merge sorted arrays", () => {
  it("fixed tests", () => {
    expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,3,5,6]);
    expect(merge([1], 1, [], 0)).to.eql([1]);
    expect(merge([0], 0, [1], 1)).to.eql([1]);
  });
});