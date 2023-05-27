Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

console.log([1, 2, 3].last());
console.log([].last());
console.log([undefined].last());

// Array.prototype.at method는 this.length로 참조하는 것보다 성능이 괜찮음.
// 속도, 메모리 적인 면에서 더 좋음.

/**
 * 문제의 컨셉
 * prototype을 이용하여 Array에 last 메소드를 추가하는 문제
 * Array.prototype에 메소드를 구현하면 모든 Array에 메소드가 추가됨.
 * 이는 javascript의 prototype 시스템에 대해 이해하고 있는지를 묻는 문제.
 * js의 prototype 시스템은 다른 언어의 상속과는 약간 다른 개념이다.
 * 런타임에 동적으로 객체의 프로퍼티를 추가할 수 있다.
 * 메소드 동적 바인딩 기법으로 볼 수 있으며, 이는 function 과 this 바인딩 이해도도 필요하다.
 * this의 경우는 함수가 호출되는 시점에 결정된다.
 * 
 * 추가로, prototype에 메소드를 정의하는 것은 메모리 적으로로 효율적이다.
 * prototype에 메소드를 정의하면 모든 인스턴스가 해당 메소드를 공유하기 때문이다.
 * 다른 케이스로 오브젝트 리터럴에 메소드를 정의하게 된다면,
 * 인스턴스마다 메소드가 생성되기 때문에 메모리 적으로 비효율적이다.
 * 경우에 따라 lexical scope를 이용하여 메소드를 정의하는 것도 좋은 방법이 될 수 있다.
 * 이때는 function 보다는 arrow function이 더 적합하다.
 * 
 */