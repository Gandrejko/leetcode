import merge from '../easy/88--Merge-Sorted-Array.js';
import { assert, expect } from 'chai';

describe("Merge sorted arrays", () => {
  it("fixed tests", () => {
    expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).to.eql([1,2,2,3,5,6]);
    expect(merge([1], 1, [], 0)).to.eql([1]);
    expect(merge([0], 0, [1], 1)).to.eql([1]);
  });
});