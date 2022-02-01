import React, { useState, useCallback } from "react"

interface IButton {
  name: string
  handler: (e: React.FormEvent<HTMLButtonElement>) => void
}

const MyButton: React.VFC<IButton> = React.memo(({ name, handler }): JSX.Element => {
  console.log("Button", name);
  return (
    <button onClick={handler} >{name}</button>
  )
});

const ACompo: React.VFC = (): JSX.Element => {
  const [count, setCount] = useState<number>(1)
  const [base, setBase] = useState<number>(1)

  const handlerUp = () => { setCount(n => n + base) }              //キャッシュなし(毎回実行)
  const handlerDown = useCallback(() => { setCount(n => n - base) }, [base])  //キャッシュあり
  const handlerBaseUp = useCallback(() => { setBase(n => n + 1) }, [])        //依存なし
  console.log("----");
  return (
    <>
      <h1>count: {count}</h1>
      <MyButton name={"Up"} handler={handlerUp} />
      <MyButton name={"Down"} handler={handlerDown} />
      <MyButton name={"BaseUp"} handler={handlerBaseUp} />
    </>
  )
}

export default ACompo