type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timerHandler: any = -1;

    return function(...args) {
        clearTimeout(timerHandler);
        timerHandler = setTimeout(() => fn(...args), t);
    }
};

export {};