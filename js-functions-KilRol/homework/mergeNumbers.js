/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  const arr = [...`${number}`].map(Number);
  const result = arr.reduce((prev, cur) => prev + cur);

  if (result.toString().length > 1) {
    return mergeNumbers(result);
  }
  return result;
}
