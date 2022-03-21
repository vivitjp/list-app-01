import React, { useCallback, useMemo, useState } from "react"

const CompoMemo = React.memo(({ num, value }) => {
  console.log(`%c[React.Memo] ${num}`, `color:${num === 1 ? "orange" : "blue"}`)
  return (
    <>
      React.memo: <div style={cssParts}>{value}</div>
    </>
  )
})

export const Callback3 = () => {
  //=========================================
  // 1 Non-Memo
  //=========================================
  const [count1, setCount1] = useState(0)
  const [calced1, setCalced1] = useState(0)

  const getCalced1 = () => {
    console.log(`%c[Non-Memo] Heavy Calc`, "color:Orange")
    for (let i = 0; i < 500_000_000; i++) {}
    setCalced1((_) => count1 * 2)
  }

  const handle1 = () => {
    console.log(`%c[Non-Memo] Handle`, "color:Orange")
    setCount1((prev) => prev + 1)
    getCalced1()
  }

  //=========================================
  // 2 MEMO
  //=========================================
  const [count2, setCount2] = useState(0)

  const double2 = useMemo(() => {
    console.log(`%c[useMemo] Heavy Calc`, "color:blue")
    for (let i = 0; i < 500_000_000; i++) {}
    return count2 * 2
  }, [count2])

  const handle2 = useCallback(() => {
    setCount2((prev) => prev + 1)
  }, [])

  //=========================================
  // JSX
  //=========================================
  return (
    <>
      <div style={cssDiv}>
        <div style={cssParts}>
          <CompoMemo num={1} value={count1} />
        </div>
        <div style={cssParts}>
          Non-Memo: <div style={cssParts}>{calced1}</div>
        </div>
        <div style={cssParts}>
          <button onClick={handle1}>Click 1</button>
        </div>
      </div>
      <div style={cssDiv}>
        <div style={cssParts}>
          <CompoMemo num={2} value={count2} />
        </div>
        <div style={cssParts}>
          useMemo: <div style={cssParts}>{double2}</div>
        </div>
        <div style={cssParts}>
          <button onClick={handle2}>Click 2</button>
        </div>
      </div>
    </>
  )
}

const cssDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  padding: "5px",
  border: "1px solid #EEE",
}

const cssParts = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  marginLeft: "10px",
  padding: "5px",
  minWidth: "100px",
  border: "1px solid #EEE",
}
