import getHealth from '../app';

test('helth 90', () => {
  const result = getHealth({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});
test('helth 50', () => {
  const result = getHealth({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});
test('helth 30', () => {
  const result = getHealth({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});
test('helth 15', () => {
  const result = getHealth({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});
test('helth 2', () => {
  const result = getHealth({ name: 'Маг', health: 2 });
  expect(result).toBe('critical');
});
