function getMean(numbers) {
  return numbers.reduce((acc, x) => acc + x, 0) / numbers.length;
}

function count(array) {
  return array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}
/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */


export function meanMode(numbers) {
  const res = count(numbers);

  let max = 0;

  let maxElem = 0;

  for (const i in res) {
    if (res[i] > max) {
      max = res[i];
      maxElem = i;
    }
  }

  if (Object.values(res).filter(value => value === max).length > 1) {
    return false;
  }

  return getMean(numbers) === Number(maxElem);
}
