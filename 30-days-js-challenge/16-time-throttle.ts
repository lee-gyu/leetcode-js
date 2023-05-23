type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let latestArgs;
  let timeHandler;

  return function throttling(...args) {
    if (timeHandler === undefined) {
      fn(...args);
      timeHandler = setTimeout(() => {
        timeHandler = undefined;

        if (latestArgs) {
          throttling(...latestArgs);
          latestArgs = undefined;
        }
      }, t);
    } else {
      latestArgs = args;
    }
  };
}

console.time();

const throttled = throttle(() => console.timeLog(), 50);

setTimeout(() => {
  throttled();
}, 50);
setTimeout(() => {
  throttled();
}, 75);

export {};
