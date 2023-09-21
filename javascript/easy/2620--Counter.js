const createCounter = function(n) {
  return function() {
    return n++;
  };
};

export default createCounter;