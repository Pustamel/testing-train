const { colorByRole, sortByIncrease } = require('./index')


test('colorByRole', () => {
  expect(colorByRole('admin')).toEqual('admin-color')
  expect(colorByRole('unit')).toEqual('unit-color')
  expect(colorByRole('manager')).toEqual('manager-color')
  expect(colorByRole('observer')).toEqual('invalid')
  expect(colorByRole(null)).toEqual('default')
  expect(colorByRole(undefined)).toEqual('default')
})

test('sortByIncrease', () => {
  expect(sortByIncrease([7, 2, 1, 0, 4, 1, 10, 3])).toEqual([0, 1, 1, 2, 3, 4, 7, 10])
})