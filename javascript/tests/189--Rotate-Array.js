import rotate from '../easy/189--Rotate-Array.js';
import { expect } from 'chai';

describe("Rotate array", () => {
  it("fixed tests", () => {
    expect(rotate([1,2,3,4,5,6,7], 3)).to.eql([5,6,7,1,2,3,4]);
    expect(rotate([-1,-100,3,99], 2)).to.eql([3,99,-1,-100]);
  });
});