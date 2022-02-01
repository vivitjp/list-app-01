import { closeSync } from "fs";

type Arr = readonly any[];

//const concat = <U extends Arr, V extends Arr>(a: U, b: V): [...U, ...V] => { return [...a, ...b] }

type TSig = <U extends Arr, V extends Arr>(a: U, b: V) => [...U, ...V]
const concat: TSig = (a, b) => { return [...a, ...b] }


const strictResult = concat([1, 2] as const, ['3', '4'] as const);
const relaxedResult = concat([1, 2], ['3', '4']);


const func1: (arg: string) => number = (foo: string) => parseInt(foo);
console.log(func1("12")) //12

type TSigFunc2 = (arg: string) => number
const func2: TSigFunc2 = (foo: string) => parseInt(foo);
console.log(func2("23")) //23


function func(arg: string): number {    //引数名の違いはチェック外
  return Number(arg);
}

//console.log(aFunc('1')); //OK: 1c







export { }