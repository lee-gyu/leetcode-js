/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return this.apply(context, args);
}


function increment() { this.count++; return this.count; }

const obj = { count: 1 }

increment.callPolyfill(obj); // 2

console.log(obj);
