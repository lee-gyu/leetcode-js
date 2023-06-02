function* fibGenerator(): Generator<number, any, number> {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield prev;

    const tmp = prev;

    prev = curr;
    curr += tmp;
  }
}

const gen = fibGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8

// destructuring assignment는 배열 메모리 소모가 발생한다.
// 메모리는 약간의 차이가 보인다. (destructuring assignment를 통해 생성되는 배열 때문.)
