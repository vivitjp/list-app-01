import { useEffect, useMemo, useState } from "react"

const classNameBtn = "flex flex-1 border justify-center"
const classNameDiv = "flex flex-1 border justify-center"

const Heavy1 = ({ a, b }: { a: number; b: number }): JSX.Element => {
  //Memo で返す value はステート(制御された変数)扱いになる。
  const value = useMemo(() => {
    console.log("New Power1")
    return a ** b
  }, [a, b])
  return <div className={classNameDiv}>{value}</div>
}

const Heavy2 = ({ a, b }: { a: number; b: number }): JSX.Element => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue((p) => {
      console.log("New Power2")
      return a ** b
    })
  }, [a, b])
  return <div className={classNameDiv}>{value}</div>
}

export const UseMemo2 = () => {
  const [a, setA] = useState(10)
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-row items-center justify-center">
      <div className={classNameDiv}>{count}</div>
      <button className={classNameBtn} onClick={() => setCount((p) => p + 1)}>
        Count Up
      </button>

      {/* 係数を変えない限り、*/}
      <button className={classNameBtn} onClick={() => setA((p) => p + 1)}>
        K Up
      </button>
      <Heavy1 a={a} b={10} />
      <Heavy2 a={a} b={10} />
    </div>
  )
}
