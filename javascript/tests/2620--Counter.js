import createCounter from '../easy/2620--Counter.js';
import { expect } from 'chai';

describe("Counter", () => {
  it("fixed tests", () => {
    const counter = createCounter(5);
    expect(counter()).to.eql(5);
    expect(counter()).to.eql(6);
    expect(counter()).to.eql(7);
  });
});