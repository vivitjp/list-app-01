import defExport, { bar, foo } from '../fbb';

jest.mock('../foo-bar-baz', () => {       //名前？
  const origMod = jest.requireActual('../fbb');

  return {
    __esModule: true,                     //esModule宣言
    ...origMod,                           //オリジナル
    default: jest.fn(() => 'mocked baz'), //default 上書き
    foo: 'mocked foo',                    //foo 上書き
  };                                      //bar オリジナル
});

test('should do a partial mock', () => {
  const defExpRes = defExport();          //上書き関数
  expect(defExpRes).toBe('mocked baz');   //上書き結果
  expect(defExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');         //上書き結果
  expect(bar()).toBe('bar');              //オリジナル結果
});