/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  let result = '';

  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count += 1;
    } else {
      result += (count > 1) ? `${input[i - 1]}${count}` : `${input[i - 1]}`;
      count = 1;
    }
  }
  result += (count > 1) ? `${input[input.length - 1]}${count}` : `${input[input.length - 1]}`;
  return result;
}
