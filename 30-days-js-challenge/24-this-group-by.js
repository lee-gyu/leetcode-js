Array.prototype.groupBy = function(fn) {
  const groupObj = {};

  for (const item of this) {
    const key = fn(item);

    if (groupObj[key] === undefined) {
      groupObj[key] = [item]
    } else {
      groupObj[key].push(item);
    }
  }

  return groupObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1, 2, 3].groupBy(String));
console.log([{id: "1"}, {id: "2"}, {id: "3"}].groupBy(item => item.id));

/**
 * undefined를 명시해서 검사하는 것이 암묵적 falsy 체크보다 좋다.
 */