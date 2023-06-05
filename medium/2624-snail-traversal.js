/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {

  if (this.length !== rowsCount * colsCount) return [];

  const output = [];

  for (let i = 0; i < rowsCount; i++) {
    const line = [];
    const incFirst = (rowsCount * 2) - 1 - (i * 2);
    const incSecond = 1 + (i * 2);
    let ind = i;

    for (let j = 0; j < colsCount; j++) {
      line.push(this[ind]);

      ind += j % 2 === 0 ? incFirst : incSecond;
    }

    output.push(line);
  }

  return output;
}

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

console.log(nums.snail(5, 4))

const nums2 = [1, 3]

console.log(nums2.snail(2, 2))