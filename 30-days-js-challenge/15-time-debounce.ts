type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
    let timerHandler: ReturnType<typeof setTimeout> = -1;

    return function(...args) {
        clearTimeout(timerHandler);
        timerHandler = setTimeout(() => fn(...args), t);
    }
};

export {};