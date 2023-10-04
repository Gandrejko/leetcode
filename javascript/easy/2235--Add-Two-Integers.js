import { assert } from 'chai';

const sum = function(num1, num2) {
  return num1 + num2
};

describe("Add two integers", () => {
  it("fixed tests", () => {
    assert.strictEqual(sum(1,1), 2);
    assert.strictEqual(sum(2,1), 3);
    assert.strictEqual(sum(2,2), 4);
    assert.strictEqual(sum(3,5), 8);
  });
});