// Задача 1. Написать функцию simple, которая:
// 1.1) Из объекта user удалить ключ work.
//   1.2) добавить ключ location, со значением 'Rostov-on-Don'
// Вернуть объект
function simple () {
  const user = {
    age: 12,
    phone: '7-###-###-##-##',
    username: 'Anton',
    work: 'developer'
  }
  //решение
  return user
}

// Задача 2.Написать функцию deleteByArg, которая:
// удалит из объекта user, ключ по аргументу key
// вернуть объект
function deleteByArg (key) {
  const user = {
    age: 12,
    phone: '7-###-###-##-##',
    username: 'Anton',
    work: 'developer'
  }
  //решение
  return user
}

// Задача 3.Написать функцию combine, которая:
// принимает на вход два объекта и объединяет их в один
// Вместо объектов(или одного из них) также может прийти null, в таком случае вернуть "invalid"
function combine (obj1, obj2) {
  //решение
}

module.exports = { simple, deleteByArg, combine }