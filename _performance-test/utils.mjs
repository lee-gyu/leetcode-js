export function printTestTime(label, fn, loop) {
  console.time(label)

  for (let index = 0; index < loop; index++)
    fn();

  console.timeLog(label)
}