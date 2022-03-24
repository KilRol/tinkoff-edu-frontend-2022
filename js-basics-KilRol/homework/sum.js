/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns а это уже сами решите
 */
export default function sum(x) {
  let res = 0;

  if (x === undefined) {
    return res;
  }
  const result = a => {
    if (a === undefined) {
      return res;
    }
    res += a;
    return result;
  };

  return result(x);
}
