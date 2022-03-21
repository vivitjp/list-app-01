import React, { useCallback, useMemo, useState } from "react"
import "./style.css"

let tmpHandleClickCB
let tmpHandleClick2

export const Callback3 = () => {
  const [countCB, setCountCB] = useState(0)
  const double1 = useMemo(() => {
    console.log("double CB")
    return countCB * 2
  }, [countCB])

  const handleClickCB = useCallback(() => {
    setCountCB((prev) => prev + 1)
  }, [])
  if (tmpHandleClickCB !== handleClickCB) {
    console.log("double CB Only Once")
  }
  tmpHandleClickCB = handleClickCB

  console.log("------")

  const [count2, setCount2] = useState(0)
  const dobule2Func = (i) => {
    console.log("double_2")
    return i * 2
  }
  const double_2 = dobule2Func(count2)

  const handleClick2 = () => {
    setCount2(count2 + 1)
  }
  if (tmpHandleClick2 !== handleClick2) {
    console.log("handleClick2")
  }
  tmpHandleClick2 = handleClick2

  console.log("-----------------------------")

  return (
    <>
      <p>state CB: {countCB}</p>
      <p>double CB: {double1}</p>
      <button onClick={handleClickCB}>handleClickCB</button>
      <p>state 2: {count2}</p>
      <p>double 2: {double_2}</p>
      <button onClick={handleClick2}>handleClick2</button>
    </>
  )
}
