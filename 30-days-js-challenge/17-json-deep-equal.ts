function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) return true;

  if (
    // return false if o1 or o2 is not 'object'
    typeof o1 !== 'object' ||
    typeof o2 !== 'object' ||
    // same type (array or object)
    Array.isArray(o1) !== Array.isArray(o2) ||
    // return false if it's not same the keys length
    Object.keys(o1).length !== Object.keys(o2).length
  )
    return false;

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  return true;
}

// console.log(areDeeplyEqual({ a: 1, b: 1, c: { dd: [1, 2, 3] } }, { a: 1, b: 1, c: { dd: [1, 2, 3] } }));
// console.log(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ['1', '2', '3'] }));
// console.log(areDeeplyEqual({ '0': 1 }, [1]));
console.log(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: [1, 2, 3] }));
