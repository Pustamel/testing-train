// Задача 1. Написать функцию findString, которая принимает на вход строку search
// Функция должна искать элемент в массиве kitchen
// без учета регистра (т.е. если на вход приходит 'spoon' или 'Spoon', должно вернуться 'spoon').
// Если элемент в функции не найден, она должна вернуть строку "empty"
function findString (search) {
  const kitchen = ['plate', 'spoon', 'pot', 'table']
  //решение
}

// Задача 2. Написать функцию findAndDelete, которая принимает на вход строку search
// Функция должна искать элемент в массиве kitchen и удалять его
// возвращать массив
function findAndDelete(search) {
  const kitchen = ['plate', 'spoon', 'pot', 'table']
  //решение
  return kitchen
}

// Задача 3. Написать функцию findAndReplace, которая принимает на вход строку search и массив
// Функция должна в массиве kitchen находить позицию по индексу (index) и заменять оставшиеся элементы на элементы из массива arr
// вернуть массив kitchen
function findAndReplace(index, arr) {
  const kitchen = ['plate', 'spoon', 'pot', 'table']
  //решение
  return kitchen
}

module.exports = { findString, findAndDelete, findAndReplace };