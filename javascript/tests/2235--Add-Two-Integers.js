import sum from '../easy/2235--Add-Two-Integers.js';
import { assert } from 'chai';

describe("Add two integers", () => {
  it("fixed tests", () => {
    assert.strictEqual(sum(1,1), 2);
    assert.strictEqual(sum(2,1), 3);
    assert.strictEqual(sum(2,2), 4);
    assert.strictEqual(sum(3,5), 8);
  });
});