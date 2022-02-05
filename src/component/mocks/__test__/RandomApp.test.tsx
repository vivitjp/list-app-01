import { screen, render, cleanup } from '@testing-library/react';
import RandomApp from '../RandomApp';
import { useRandom } from '../useRandom';

jest.mock('../useRandom');
const useRandomMock = useRandom as jest.MockedFunction<typeof useRandom>;

afterEach(cleanup);

it('value===7 で "Lucky 7" と表示', () => {
  useRandomMock.mockReturnValue([7, () => { }]);
  render(<RandomApp />);
  const value = screen.getByTestId('value');
  expect(value.textContent).toEqual('Lucky 7');
});