import React from "react"
import { useEffect, useMemo, useState } from "react"

const className = "flex flex-1 border justify-center"

const Heavy1 = ({ a, b }: { a: number; b: number }) => {
  //Memo で返す value はステート(制御された変数)扱いになる。
  console.log("Heavy1")
  const value = useMemo(() => {
    console.log("Heavy1 UseMemo=useEffect[]")
    return a ** b
  }, [a, b])
  return <div className={className}>{value}</div>
}

const Heavy2 = ({ a, b }: { a: number; b: number }) => {
  const [value, setValue] = useState(0)
  console.log("Heavy2")
  useEffect(() => {
    console.log("Heavy2 useEffect")
    setValue((p) => a ** b)
  }, [a, b])
  return <div className={className}>{value}</div>
}

export const UseMemo2 = () => {
  const [a, setA] = useState(10)
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-row items-center justify-center">
      <div className={className}>{count}</div>
      <button className={className} onClick={() => setCount((p) => p + 1)}>
        Count Up
      </button>

      {/* 係数を変えない限り、*/}
      <button className={className} onClick={() => setA((p) => p + 1)}>
        A Up
      </button>
      <Heavy1 a={a} b={10} />
      <Heavy2 a={a} b={10} />
    </div>
  )
}
