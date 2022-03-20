import React, { useCallback, useMemo, useState } from "react"
import "./style.css"

let tmpHandleClickCB //: () => void;
let tmpHandleClickPL

const CompoMemo = React.memo(({ value }) => {
  console.log("React.memo Component")
  return <p>React.memo: {value}</p>
})

const CompoPlain = ({ value }) => {
  console.log("Plain Component")
  return <p>Plain: {value}</p>
}

export const Callback4 = () => {
  console.log("[START]-----------------------------")

  const [countCB, setCountCB] = useState(0)

  const double_1 = useMemo(() => {
    console.log("useMemo Double")
    for (let i = 0; i < 500_000_000; i++) {}

    return countCB * 2
  }, [countCB])

  const handleClickCB = useCallback(() => {
    setCountCB((prev) => prev + 1)
  }, [])
  if (tmpHandleClickCB !== handleClickCB) {
    console.log("useCallback Click")
  }
  tmpHandleClickCB = handleClickCB

  const [count2, setCount2] = useState(0)

  const dobule2Func = (i) => {
    console.log("Plain Double")
    return i * 2
  }
  const double_2 = dobule2Func(count2)

  const handleClickPL = () => {
    setCount2(count2 + 1)
  }
  if (tmpHandleClickPL !== handleClickPL) {
    console.log("Plain Click")
  }
  tmpHandleClickPL = handleClickPL

  return (
    <>
      <React.Suspense fallback={<span>...</span>}>
        <CompoMemo value={countCB} />
      </React.Suspense>
      <p>useMemo Double: {double_1}</p>
      <button onClick={handleClickCB}>Click Callback</button>

      <CompoPlain value={count2} />
      <p>Plain Double: {double_2}</p>
      <button onClick={handleClickPL}>Click</button>
    </>
  )
}
