import { printTestTime } from "./utils.mjs"

const bl = true;
const TEST_LENGTH = 500000000;

function foo() {
  let id = 0;

  return id++;
  // nothing
}

function benchmark_for_if() {
  for (let index = 0; index < TEST_LENGTH; index++) {
    if (bl) foo(); 
  }
}

function benchmark_for_and() {
  for (let index = 0; index < TEST_LENGTH; index++) {
    bl && foo(); 
  }
}

printTestTime("and", benchmark_for_and, 10)
// printDuration("if", benchmark_for_if, 10)

/**
 * 결론: if나 and나 똑같다. 가독성과 관련된 문제이다.
 */