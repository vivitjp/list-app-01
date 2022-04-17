import React, { useState, useCallback } from "react"

//引数に useCallbackを使用しない handler などが含まれていると
//memo の効力はなくなる
const Input = React.memo(({ val, handler, id }) => {
  console.log(`Input Memo ${id}`)
  return (
    <input
      onChange={(e) => handler(e.currentTarget.value)}
      value={val}
      className="flex flex-0 m-0 border p-3"
    />
  )
})

export const Callback = () => {
  const [count, setCount] = useState(0)
  const [stateCB, setStateCB] = useState(0)
  const [state, setState] = useState(0)

  //useCallback + Memo
  const handleCB = useCallback((val) => {
    console.log(`%chandle`, "color:blue")
    setStateCB(val)
  }, [])

  //Memo(再描画対象)
  const handle = (val) => {
    console.log(`%chandle`, "color:green")
    setState(val)
  }

  return (
    <>
      <div className="flex flex-row justify-start">
        <input
          type="button"
          onClick={() => setCount((p) => p + 1)}
          value={`Count ${count}`}
          className="flex flex-0 m-0 border p-3"
        />
        <Input val={stateCB} handler={handleCB} id={"CB"} />
        <Input val={state} handler={handle} id={"Non"} />
      </div>
    </>
  )
}
