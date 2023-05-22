// * Function Memoization
// 한번 수행한 Parameters에 대해서, 중복 호출 방지
// 인자는 숫자만 온다.
// TODO key를 조금 더 효율적으로 처리

type Fn = (...params: any) => any

function getMemoKey(args: any[]) {
    return args.join("|");
}

function memoize(fn: Fn): Fn {
    const memoMap = new Map();
    
    return function(...args) {
        const key = getMemoKey(args);

        if (memoMap.has(key)) return memoMap.get(key);

        const fnEval = fn(...args);

        memoMap.set(key, fnEval);

        return fnEval;
    }
}

export {};