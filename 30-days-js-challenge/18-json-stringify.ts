// need optimization

const dfs = (object: any) => {
  if (object === null || object === undefined) return 'null';
  else if (Array.isArray(object)) {
    if (object.length === 0) return '[]';

    let str = '[';

    for (const item of object) str += dfs(item) + ',';

    return `${str.slice(0, -1)}]`;
  } else if (typeof object === 'object') {
    if (Object.keys(object).length === 0) return '{}';

    let str = '{';

    // index 버전, const iterator 버전
    for (const key in object) str += `"${key}":` + dfs(object[key]) + ',';

    return `${str.slice(0, -1)}}`;
  } else if (typeof object === 'string') {
    return `"${object}"`;
  } else {
    return object.toString();
  }
};

function jsonStringify(object: any): string {
  return dfs(object);
}

// Array는 메모리 소모가 크다.
// 함수 Call에 대한 오버헤드, 메모리 소모가 크다.
// function은 최대한 없는게 좋음
// arrow function이나 function은 유의미한 메모리 차이는 없음
// 단순 string 연산은 바로 메모리 회사에 도움이 된다.

/**
 * 극한 성능 관리 팁
 * 함수 콜이 많아지면 메모리 소모가 크다.
 * 메모리를 적게 쓰려면 primitive type을 쓰는게 좋다. (메모리 회수에 도움이 된다.)
 * array[index]보다 push, pop을 쓰는게 좋다.
 * for 순회에 비해 array.map은 성능이 좋지 않다.
 * 최적의 성능을 위해서는 for 순회를 쓰는게 좋다.
 * memory 버퍼보다는 string 연산이 메모리 회수에 도움이 된다.
 * Array.prototype.join 역시 함수콜로 느림. 함수 콜보다는 string 연산이 빠르다.
 *
 * 메모리 적인 이득: primitive type이 빠름 (Array는 Heap에 저장되기 때문)
 * 성능적인 이득: push 및 join이 빠름
 * 단, 일부 케이스에 따라 다르다.
 * 짧으면 string concat이 유리하고, 길면 join이 유리하다.
 * https://joshua1988.github.io/web-development/javascript/javascript-best-practices/
 *
 */

console.log(jsonStringify([1, 2, 3]));
console.log(jsonStringify([1, '2', 3, null, undefined, null, [2, 3, [null, true, false]]]));

console.log(jsonStringify({ a: 1, b: 2, c: 44 }));
