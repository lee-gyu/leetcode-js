const CASES = [
  // small
  "abcdef",
  // medium
  "abcdefghijklmnopqrstuvwxyz01234567890_+!)@!(#*$&%^abcdefghijklmnopqrstuvwxyz01234567890_+!)@!(#*$&%^abcdefghijklmnopqrstuvwxyz01234567890_+!)@!(#*$&%^",
]

const clone_array_exchange_join = (str) => {
  const strArr = [...str];
  const len = strArr.length;

  for (let i = 0; i < len / 2; i++) {
    [strArr[i], strArr[len - i - 1]] = [strArr[len - i - 1], strArr[i]];
  }

  return strArr.join("");
};

const empty_array_exchange_join = (str) => {
  const strArr = Array(str.length);
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    [strArr[i], strArr[len - i - 1]] = [str[len - i - 1], str[i]];
  }

  return strArr.join("");
};

const array_map_join = (str) => {
  return Array.from({ length: str.length })
    .map((_, i) => str[str.length - i - 1])
    .join("");
};

const generator = function* (str) {
  for (let i = str.length - 1; i >= 0; i--) yield str[i];
};

const generator_join = (str) => {
  return [...generator(str)].join("");
};

const clone_array_reverse_join = (str) => {
  return [...str].reverse().join("");
};

const array_push_join = (str) => {
  const strArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    strArr.push(str[i]);
  }

  return strArr.join("");
}

const str_concat = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const testPerformance = (fn, str) => {
  const startTime = performance.now();

  for (let index = 0; index < 100000; index++) {
    fn(str);
  }

  const endTime = performance.now();
  return endTime - startTime;
};

CASES.forEach((msg, id) => {
  console.log("---");
  console.log(`#${id} clone_array_exchange_join`, testPerformance(clone_array_exchange_join, msg));
  console.log(`#${id} array_map_join`, testPerformance(array_map_join, msg));
  console.log(`#${id} empty_array_exchange_join`, testPerformance(empty_array_exchange_join, msg));
  console.log(`#${id} generator_join`, testPerformance(generator_join, msg));
  console.log(`#${id} clone_array_reverse_join`, testPerformance(clone_array_reverse_join, msg));
  console.log(`#${id} array_push_join`, testPerformance(array_push_join, msg));
  // the best performance
  console.log("str_concat", testPerformance(str_concat, msg));
})


/**
 * Array.prototype.reverse() is the fastest way to reverse a string
 * 함수형 프로그래밍의 배열 관련 연산 함수들은 성능적으로는 아쉬운 점들이 있음.
 * 함수형 프로그래밍은 성능적으로는 아쉬운 점들이 있지만, 코드의 가독성이나 유지보수성 측면에서는 좋음.
 * 작성하려는 코드의 성격에 따라서 적절한 방법을 선택하는 것이 중요.
 */