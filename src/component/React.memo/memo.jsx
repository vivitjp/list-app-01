import React, { useState, memo, useRef } from "react"

const Compo = ({ value }) => {
  console.log(`%c[NonMemo]`, "color:red")
  return <div>NonMemo {value}</div>
}

const CompoMemo = memo(({ value }) => {
  console.log(`%c[React.Memo]`, "color:blue")
  return <div>Memo {value}</div>
})

export const Callback = () => {
  const memoVal = useRef(1)
  const [count, setCount] = useState(0)

  const handleLocal = () => {
    setCount((prev) => prev + 1)
  }

  //=========================================
  // JSX
  //=========================================
  return (
    <>
      <Compo value={memoVal.current} />
      <CompoMemo value={memoVal.current} />
      <div>{count}</div>
      <button onClick={handleLocal}>LocalUp</button>
    </>
  )
}
