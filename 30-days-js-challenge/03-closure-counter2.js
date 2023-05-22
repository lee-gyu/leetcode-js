/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initValue = init;
  let current = init;

  return {
    increment() {
      return ++current;
    },
    reset() {
      current = initValue;

      return current;
    },
    decrement() {
      return --current;
    },
  };
};
