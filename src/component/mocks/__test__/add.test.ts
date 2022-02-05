import addClass from '../addClass';
import calc from '../calc';

jest.mock('../addClass');

const mockAddClass = addClass as jest.MockedClass<typeof addClass>;

test('calculate calls add', () => {
  const ans = calc('Add', 1, 2);
  console.log(ans)

  expect(mockAddClass.add).toBeCalledTimes(1);
  expect(mockAddClass.add).toBeCalledWith(1, 2);
});