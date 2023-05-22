// ! Array.prototype.filter 쓰지 않기

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  return arr.reduce((filtered, num, id) => {
    fn(num, id) && filtered.push(num);

    return filtered;
  }, []);
}
