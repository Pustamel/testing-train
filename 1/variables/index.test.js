const { combine, clean } = require('./index')


test('simple', () => {
  expect(combine('Hello', 'world!')).toEqual('Hello, world!')
  expect(combine(null, 'world!')).toEqual('invalid')
  expect(combine('Hello', null)).toEqual('invalid')
})

test('clean', () => {
  expect(clean('Hello.my.friend!')).toEqual('Hello my friend!')
  expect(clean('Hi.developer')).toEqual('Hi developer')
})