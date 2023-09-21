import sortBy from '../easy/2724--Sort-By.js';
import { expect } from 'chai';

describe("Counter", () => {
  it("fixed tests", () => {
    expect(sortBy([5,4,1,2,3], (x) => x)).to.eql([1, 2, 3, 4, 5]);
    expect(sortBy([{"x":1},{"x": 0},{"x": -1}], (x) => x.x)).to.eql([{"x": -1}, {"x": 0}, {"x": 1}]);
    expect(sortBy([[3,4],[5,2],[10,1]], (x) => x[1])).to.eql([[10, 1], [5, 2], [3, 4]]);
  });
});