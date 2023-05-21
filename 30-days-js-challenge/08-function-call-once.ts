// * 한번만 호출되게 하기
// Closure를 이용하여 호출된 상태 처리

function once<T extends (...args: any[]) => any>(fn: T): 
 ((...args: Parameters<T>) => ReturnType<T> | undefined) {
  let isCalled = false;

  return function (...args) {
    if (isCalled) return undefined;

    isCalled = true;

    return fn(...args);
  };
}