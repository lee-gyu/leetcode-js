type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  const flatArr = [];

  function flatten(arr: any, id: number) {
    if (id === n) flatArr.push(...arr);
    else {
      for (const item of arr) {
        if (Array.isArray(item)) flatten(item, id + 1);
        else flatArr.push(item);
      }
    }
  }

  flatten(arr, 0);

  return flatArr;
}

// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
// console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
);
