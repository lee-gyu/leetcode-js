function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

// TODO reduce로 구현해보기
function getSortedObjectKeys(arr: any[]): string[] {
  const keySet = new Set<string>();

  function addObjectKeys(obj: object, keyPath: string) {
    for (const key in obj) {
      if (isObject(obj[key])) addObjectKeys(obj[key], keyPath + key + '.');
      else keySet.add(keyPath + key);
    }
  }

  arr.forEach((obj) => addObjectKeys(obj, ''));

  return [...keySet.values()].sort();
}

function getObjectValueByPath(obj: object, keyPath: string) {
  const keyIterator = keyPath.split('.')[Symbol.iterator]();
  let it = keyIterator.next();
  let currentObj: any = obj;

  while (!it.done) {
    if (!isObject(currentObj)) break;

    currentObj = currentObj[it.value];
    it = keyIterator.next();
  }

  if (!it.done || isObject(currentObj) || currentObj === undefined) return '';

  return currentObj;
}

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
  // first array: keys
  const keys = getSortedObjectKeys(arr);
  const matrix = [keys];

  arr.forEach((obj) => {
    matrix.push(keys.map((key) => getObjectValueByPath(obj, key)));
  });

  return matrix;
}

const arr = [{ b: 1, a: 2, c: { d: { e: 1, f: 10 }, a: 2 } }, { b: 3, a: 4 }, { a: { b: 5 } }];
const arr2 = [
  { b: 1, a: 2 },
  { b: 3, a: 4 },
];

const arr3 = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];

const arr4 = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];

const arr5 = [[{ a: null }], [{ b: true }], [{ c: 'x' }]];

const arr6 = [{}, {}, {}];

const arr7 = [];

console.log(jsonToMatrix(arr4));

/**
 * 메모리 절약 참고용
function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
    const map = new Map()
    const n = arr.length
    for (let key in arr) {
        getKeysValue(arr[key], n, key, '', map)
    }
    const ans = new Array(n + 1).fill(null).map(() => new Array(map.size))
    ans[0] = [...map.keys()].sort((a, b) => a < b ? -1 : 1)
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < map.size; j++) {
            ans[i][j] = map.get(ans[0][j])[i - 1]
        }
    }
    return ans
};
function getKeysValue(arr: any[], len: number, index: string, str: string, map: Map<string, any>) {
    for (let key in arr) {
        if (arr[key] === null || typeof arr[key] !== 'object') {
            if (!map.has(str + key)) map.set(str + key, new Array(len).fill(''))
            map.get(str + key)[index] = arr[key]
        } else {
            getKeysValue(arr[key], len, index, str + key + '.', map)
        }
    }
}
 */
