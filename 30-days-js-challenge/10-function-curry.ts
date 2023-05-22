function curry(fn: Function): Function {
  // fn.length is the length of arguments
  return function curried(...args) {
    return args.length >= fn.length //
      ? fn(...args)
      : (...args2) => curried(...args, ...args2);
  };
}

function sum(a, b) {
  return a + b;
}
function sum2(a, b, c) {
  return a + b + c;
}

const csum = curry(sum);
const csum1 = csum(1);

console.log(csum1(2)); // 3
console.log(csum1(3)); // 4

console.log(curry(sum)(2, 3)); // 5;

const csum2 = curry(sum2);

console.log(csum2(2)(3)(4));
console.log(csum2(2, 3)(4));
