// * promise를 pool size에 맞게 순서대로 실행 되도록 처리

type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
    const promiseIter = functions[Symbol.iterator]();
    let { length } = functions;

    return new Promise<void>((resolve) => {
        function execPromise() {
            const current = promiseIter.next();

            if (current.done) {
                length === 0 && resolve();
                return;
            }

            current.value().finally(() => {
                --length;
                execPromise();
            });
        }

        for(let i=0; i<n; ++i)
            execPromise();
    })
};