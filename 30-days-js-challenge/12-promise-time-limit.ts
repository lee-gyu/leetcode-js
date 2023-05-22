

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    let isDone = false;

	return function(...args) {
        return new Promise((resolve, reject) => {
            const handler = setTimeout(() => {
                if (!isDone) reject("Time Limit Exceeded")
            }, t)
            
            fn(...args)
            .then((result) => {
                isDone = true;
                resolve(result);
            })
            .catch((err) => reject(err))
            .finally(() => clearTimeout(handler));
        });
    }
};

export {};