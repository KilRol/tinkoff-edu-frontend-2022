function count(array) {
  return array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */

export function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const a1 = count(first.toLowerCase().split(''));
  const a2 = count(second.toLowerCase().split(''));

  for (const i in a1) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
}
