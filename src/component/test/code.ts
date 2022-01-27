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

const var1: {} = { 'A': 123 };     //オブジェクト型
const var2: object = { 'A': 123 }; //オブジェクト型
const var3: any = { 'A': 123 };    //Any型
const var4: { 'A': number } = { 'A': 123 };    //Any型
const var5: { [key: string]: number } //インデックスシグネチャ
  = { 'A': 123 };

var1
var2
var3
var4

export { }