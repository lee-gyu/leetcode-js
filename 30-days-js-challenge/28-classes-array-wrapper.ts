class ArrayWrapper {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, num) => acc + num, 0);
  }

  toString() {
    return `[${this.nums.join(',')}]`;
  }
}

/**
 * prototype의 valueOf, toString 구현을 묻는 문제.
 * 객체의 연산자 오버로딩을 구현하는 문제이다.
 * number의 + 연산이나 string concat 연산의 경우 호출되는 메서드
 * 
 */