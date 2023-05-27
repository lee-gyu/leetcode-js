Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

console.log([1, 2, 3].last());
console.log([].last());
console.log([undefined].last());

// Array.prototype.at method는 this.length로 참조하는 것보다 성능이 괜찮음.
// 속도, 메모리 적인 면에서 더 좋음.