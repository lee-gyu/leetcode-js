// ! Array.prototype.map 함수 쓰지 않기
// * Array.from는 map이랑 별 다를바 없어 보임

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return Array.from(arr, (num, id) => fn(num, id));
}
