interface TData {
  name: string, age: number, act: boolean;
}

const dataAll: TData[] = [
  { name: "John", age: 34, act: true },
  { name: "Sony", age: 23, act: false }
]

console.log(dataAll);

type TName<T> = T extends { name: infer R } ? R : never;

const dataName1: TName<TData>[] = ["Steve", "Smith"]
const dataName2: TName<TData>[] = Object.values(dataAll).map((item) => item.name)

console.log(dataName1);
console.log(dataName2);

type TName2<T> = T extends { name: infer R, act: infer S } ? [R, S] : never;

const dataName3: TName2<TData>[] = [["Steve", true], ["Smith", false]]

console.log(dataName3);

export { }