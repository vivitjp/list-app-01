type TPerson = {
  id: string
  name: string
  age: number
}

type TIDName = Exclude<TPerson, 'age'>           // 感覚的に age を除去！
const idname: TIDName = { id: "123", name: "John", age: 12 } //変化なし！

type TExclude = Exclude<keyof TPerson, 'age'>    // 感覚的に age を除去！
//const ex: TExclude = { id: "123", name: "John" }   // Error NG!!!!

type TPick = Pick<TPerson, Exclude<keyof TPerson, 'age'>>;
const x1: TPick = { id: "123", name: "John" }

type TOmit = Omit<TPerson, 'age'>;
const x2: TOmit = { id: "123", name: "John" }


export { }