function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isSameObject(value1, value2) {
  return isObject(value1) && isObject(value2) && Array.isArray(value1) === Array.isArray(value2);
}

function objDiff(obj1: object, obj2: object) {
  const diff = {};
  // 1. search obj key's
  // 2. if the value is object, search again
  // array case

  function dfsKeys(diffObj, searchObj, targetObj) {
    for (const key in searchObj) {
      if (isObject(searchObj[key]) && isSameObject(searchObj[key], targetObj[key])) {
        diffObj[key] = {};
        dfsKeys(diffObj[key], searchObj[key], targetObj[key]);

        // if diff is empty, delete
        if (Object.keys(diffObj[key]).length === 0) delete diffObj[key];
      } else if (targetObj[key] !== undefined && searchObj[key] !== targetObj[key]) {
        diffObj[key] = [searchObj[key], targetObj[key]];
      }
    }
  }

  dfsKeys(diff, obj1, obj2);

  return diff;
}

// obj1 기준으로 obj2와 다른 것들 확인
{
  const obj1 = {
    a: 1,
    v: 3,
    x: [],
    z: {
      a: null,
    },
  };
  const obj2 = {
    a: 2,
    v: 4,
    x: [],
    z: {
      a: 2,
    },
  };

  console.log(objDiff(obj1, obj2));
}

{
  const obj1 = {
    a: 5,
    v: 6,
    z: [1, 2, 4, [2, 5, 7]],
  };
  const obj2 = {
    a: 5,
    v: 7,
    z: [1, 2, 3, [1]],
  };

  console.log(JSON.stringify(objDiff(obj1, obj2)));
}

{
  const obj1 = {
    a: { b: 1 },
  };
  const obj2 = {
    a: [5],
  };

  console.log(JSON.stringify(objDiff(obj1, obj2)));
}

{
  const obj1 = {
    a: [1, 2, {}],
    b: false,
  };
  const obj2 = {
    b: false,
    a: [1, 2, {}],
  };

  console.log(JSON.stringify(objDiff(obj1, obj2)));
}
