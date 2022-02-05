import addClass from './addClass'

const calc = (type: string, ...arg: number[]): number => {
  if (type === 'Add') {
    return arg.reduce((prev, cur) => addClass.add(prev, cur))
  } else return 0;
}

export default calc