const { simple, deleteByArg, combine } = require('./index')


test('simple', () => {
  expect(simple()).toEqual({
    age: 12,
    phone: '7-###-###-##-##',
    username: 'Anton',
    location: 'Rostov-on-Don'
  })
})

test('deleteByArg', () => {
  expect(deleteByArg('work')).toEqual({
    age: 12,
    phone: '7-###-###-##-##',
    username: 'Anton'
  })
  expect(deleteByArg('age')).toEqual({
    phone: '7-###-###-##-##',
    username: 'Anton',
    work: 'developer'
  })
})

test('combine', () => {
  expect(combine({userId: 1}, {name: 'Anton'})).toEqual({
    userId: 1,
    name: 'Anton'
  })
  expect(combine({}, {})).toEqual({})
  expect(combine(null, {})).toEqual('invalid')
  expect(combine({}, null)).toEqual('invalid')
})