/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} password пароль
 * @return {boolean}
 */

export default function passwordCheck(password) {
  if (password.match(/\d+/) === null) {
    return false;
  }
  if (password.match(/[A-Z]+/) === null) {
    return false;
  }
  if (password.match(/[a-z]+/) === null) {
    return false;
  }
  if (password.match(/[!?.,+\-*/=]+/) === null) {
    return false;
  }
  return password.length >= 10;
}
