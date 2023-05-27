function chunk(arr: any[], size: number): any[][] {
  const buffer = [];
  let current = 0;

  while (current < arr.length) {
    buffer.push(arr.slice(current, current + size));
    current += size;
  }

  return buffer;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 6));
