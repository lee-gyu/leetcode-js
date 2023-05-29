import { printTestTime } from "./utils.mjs"

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
const LARGE_ALPHABETS = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

const SMALL_PIECES = ALPHABETS.split("")
const LARGE_PIECES = Array(100).fill(LARGE_ALPHABETS)

function concat(strArray) {
  let result = ""

  for (const str of strArray)
    result += str

  return result
}

function join(strArray) {
  return strArray.join("")
}

function join2(strArray) {
  return strArray.join()
}

printTestTime("small::concat", () => concat(SMALL_PIECES), 100000)
printTestTime("small::join", () => join(SMALL_PIECES), 100000)
printTestTime("small::join2", () => join2(SMALL_PIECES), 100000)
printTestTime("large::concat", () => concat(LARGE_PIECES), 100000)
printTestTime("large::join", () => join(LARGE_PIECES), 100000)
printTestTime("large::join2", () => join2(LARGE_PIECES), 100000)

/**
 * 결론: string concat이 join보다 훨씬 빠르다.
 * 
 * @link https://medium.com/@zhongdongy/the-performance-of-javascript-string-concat-e52466ca2b3a
 * @link https://stackoverflow.com/questions/7299010/why-is-string-concatenation-faster-than-array-join 
 */