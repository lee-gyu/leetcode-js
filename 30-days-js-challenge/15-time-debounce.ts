type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timerHandler: ReturnType<typeof setTimeout> | undefined = undefined;

  return function (...args) {
    timerHandler !== undefined && clearTimeout(timerHandler);
    timerHandler = setTimeout(() => fn(...args), t);
  };
}

export {};
