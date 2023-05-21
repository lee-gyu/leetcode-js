// ! reduce 쓰지 않고 reduce 기능 구현

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init;

    for (const num of nums)
        accum = fn(accum, num);
    
    return accum;
};