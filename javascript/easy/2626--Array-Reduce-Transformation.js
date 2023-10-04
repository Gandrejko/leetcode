import { expect } from 'chai';

const reduce = function(nums, fn, init) {
  return nums.reduce(fn, init);
};

describe("Counter", () => {
  it("fixed tests", () => {
    expect(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0)).to.eql(10);
    expect(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)).to.eql(130);
    expect(reduce([], function sum(accum, curr) { return 0; }, 25)).to.eql(25);
  });
});