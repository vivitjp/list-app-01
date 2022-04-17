import React, { useState, useCallback } from "react"

//引数に useCallbackを使用しない handler などが含まれていると
//memo の効力はなくなる
type Props = {
  val: string
  handler: (val: string) => void
  id: string
}
const Input = React.memo(({ val, handler, id }: Props) => {
  console.log(`Input Memo ${id}`)
  return (
    <input
      onChange={(e) => handler(e.currentTarget.value)}
      value={val}
      className="flex flex-0 m-0 border p-3"
    />
  )
})

export const UseCallback = () => {
  const [count, setCount] = useState(0)
  const [stateCB, setStateCB] = useState("")
  const [state, setState] = useState("")

  //useCallback + Memo
  const handleCB = useCallback((val: string) => {
    console.log(`%chandle`, "color:blue")
    setStateCB(val)
  }, [])

  //Memo(再描画対象)
  const handle = (val: string) => {
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
