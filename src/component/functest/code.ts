type resValues<T> = T extends () => Promise<infer U> ? U : never;
type Fetch<T> = () => Promise<resValues<T>>;

async function series<T>(...fetches: Fetch<T>[]) {
  let res: resValues<T>[] = [];

  for (let fetch of fetches) {
    res.push(await fetch());
  }
  return res;
}

series<() => Promise<{ data: string }>>(
  () => Promise.resolve({ data: 'second' }),
  () => Promise.resolve({ data: 'third' }),
).then(
  res => res.forEach(item => {
    console.log(item.data); //
  })
);

// const var1: {} = { 'A': 123 };     //オブジェクト型
// const var2: object = { 'A': 123 }; //オブジェクト型
// const var3: any = { 'A': 123 };    //Any型
// const var4: { 'A': number } = { 'A': 123 };    //Any型
// const var5: { [key: string]: number } //インデックスシグネチャ
//   = { 'A': 123 };

function giveId<T>(obj: T): T & { id: string } {
  const id = "123";
  return { ...obj, id };
}

const obj1: { id: string; foo: number; }
  = giveId({ foo: 123 });

const obj2: { id: string; num: number; hoge: boolean; }
  = giveId({ num: 0, hoge: true });

console.log(obj1);
console.log(obj2);

export { }