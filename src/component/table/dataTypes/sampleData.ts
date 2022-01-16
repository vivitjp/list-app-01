// interface attrname {
//   [name: string]: boolean | string | number | undefined
// }  //extends attrname 

export interface ISamplePersonA {
  last_name: string
  first_name: string
  ken?: string
  city?: string
  sex?: string
  age?: number
  start_date?: string
  act?: boolean
}

// type thisType = ISamplePersonA['last_name'] //OK
// const names: string = 'last_name'
// type thisType = ISamplePersonA[names] //Error!!!

