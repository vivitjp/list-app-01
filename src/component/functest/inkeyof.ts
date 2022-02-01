
const arr: { [key: string]: string } = {
  addr: "tokyo",
  name: "john"
}

type TKyes<T> = {
  [P in keyof T]: string;   //OK
}

const getKeys = (param: TKyes<string[]>) => {
  console.log(param)
}

getKeys(Object.keys(arr))




export { }