// need optimization
function jsonStringify(object: any): string {
  let result = '';

  function dfs(object: any) {
    if (object === null || object === undefined) return 'null';
    else if (Array.isArray(object)) {
      return `[${object.map((item) => dfs(item)).join(',')}]`;
    } else if (typeof object === 'object') {
      return `{${Object.keys(object)
        .map((key) => `"${key}":${dfs(object[key])}`)
        .join(',')}}`;
    } else if (typeof object === 'string') {
      return `"${object}"`;
    } else {
      return object.toString();
    }
  }

  result += dfs(object);

  return result;
}

console.log(jsonStringify([1, 2, 3]));
console.log(jsonStringify([1, '2', 3, null, undefined, null, [2, 3, [null, true, false]]]));

console.log(jsonStringify({ a: 1, b: 2, c: 44 }));
