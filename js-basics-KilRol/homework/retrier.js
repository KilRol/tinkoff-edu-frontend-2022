/**
 * Напишите функцию, которая будет пытаться вызвать функцию до тех пор,
 * пока функция не отработает без ошибок, но не более указанного во втором
 * аргументе количества раз.
 *
 * Если функция ни разу не отработала нормально, нужно выбросить последнюю ошибку.
 *
 * Пример:
 * const logFail = () => {
 *     console.log(1);
 *     throw new Error(2);
 * }
 * retrier(logFail, 5) => 5 раз выведет сообщение "1" и упадет с ошибкой "2"
 *
 * Больше примеров в тестах.
 *
 * @param  {Function} fn функция
 * @param  {number} retries максимальное количество ретраев
 */
export default function retrier(fn, retries) {
  if (retries === 1) {
    return fn();
  }
  try {
    return fn();
  } catch (e) {
    return retrier(fn, retries - 1);
  }
}
