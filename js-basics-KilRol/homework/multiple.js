/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

function checkInf(a, b) {
  if (a === 0 || b === 0) {
    return NaN;
  }
  return Math.sign(a) + Math.sign(b) === 0 ? -Infinity : Infinity;
}

function checkZero(a, b) {
  if (Math.sign(a) === 1) {
    return b;
  }
  if (Math.sign(b) === 1) {
    return a;
  }
  if (Math.sign(a) === -1) {
    return -b;
  }
  if (Math.sign(b) === -1) {
    return -a;
  }
  if (1 / a === -Infinity && 1 / b === -Infinity) {
    return 0;
  }
  return Math.min(a, b);
}

export default function multiple(a, b) {
  if (Math.abs(a) === Infinity || Math.abs(b) === Infinity) {
    return checkInf(a, b);
  }
  if (a === 0 || b === 0) {
    return checkZero(a, b);
  }

  let result = 0;

  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }
  if (Math.sign(b) === -1) {
    return -result;
  }
  return result;
}
