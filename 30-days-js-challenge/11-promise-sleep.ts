// * 비동기 제어를 이용하여 js sleep 구현

function sleep(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), millis))
}
