const { findString, findAndDelete, findAndReplace } = require('./searching')


test('findString', () => {
  expect(findString('spoon')).toMatch(/spoon/);
  expect(findString('something')).toMatch(/empty/);
});

test('findAndDelete', () => {
  expect(findAndDelete('spoon')).toEqual(['plate', 'pot', 'table']);
  expect(findAndDelete('pot')).toEqual( ['plate', 'spoon', 'table']);
  expect(findAndDelete('something')).toEqual(['plate', 'spoon', 'pot', 'table']);
});

test('findAndReplace', () => {
  expect(findAndReplace(3, [1, 2])).toEqual(['plate', 'spoon', 'pot', 1, 2])
  expect(findAndReplace(0, [1, 2, 8, 1, 0])).toEqual([1, 2, 8, 1, 0])
})