/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (obj === null || obj === undefined || classFunction === null || classFunction === undefined) return false;
  
  let proto = Object.getPrototypeOf(obj);
  const classProto = classFunction.prototype;

  while (proto !== null) {
    if (proto === classProto) return true;

    proto = Object.getPrototypeOf(proto);
  }

  return false;
};


console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(null, null)); // false

/**
 * prototype을 이용하여, obj가 class의 prototype을 가지고 있는지 확인하는 문제
 * __proto__보다는 Object.getPrototypeOf()를 사용하는 것이 좋다. (성능, 메모리면에서 훨씬 효율적이다.)
 * constructor를 이용하여 해결하는 솔루션도 있음
 * 
 * 인스턴스를 비교할 class의 prototype과 현재 오브젝트의 프로토타입 체인을 비교
 * 
 */