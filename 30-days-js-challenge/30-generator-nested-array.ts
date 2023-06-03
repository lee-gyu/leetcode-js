type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for (const item of arr) {
    if (Array.isArray(item)) yield* inorderTraversal(item);
    else yield item;
  }
}

const gen = inorderTraversal([[1], [2, 3]]);

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

export {};

/**
 * 재귀적인 호출이 솔루션은 되긴하지만,
 * 실행 성능이나 메모리 사용량 측면에서는 좋지 않다.
 * generator 내부에 stack 구조를 만들어서 구현 시, 메모리 부분에서 이점이 있다.
 * 다른 솔루션으로는 flat으로 풀어서 풀면 메모리 면에서 이점이 있다.
 */
