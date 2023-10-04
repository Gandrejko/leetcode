import { expect } from 'chai';

const createCounter = function(n) {
  return function() {
    return n++;
  };
};

describe("Counter", () => {
  it("fixed tests", () => {
    const counter = createCounter(5);
    expect(counter()).to.eql(5);
    expect(counter()).to.eql(6);
    expect(counter()).to.eql(7);
  });
});