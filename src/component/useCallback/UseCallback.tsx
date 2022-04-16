import React from "react"
import { useCallback, useState } from "react"

const Compo = ({ id }: { id: number }) => {
  console.log("id", id)
  const [val, setVal] = useState(0)
  const callback = () => {
    console.log("id callback", id)
    setVal(Math.round(Math.random() * 10))
  }
  // const callback = useCallback(() => {
  //   console.log("id callback", id)
  //   setVal(Math.round(Math.random() * 10))
  // }, [id])

  return (
    <div className="flex flex-row">
      <div className="p-3 border">{val}</div>
      <input
        className="p-3 border"
        type="button"
        onClick={callback}
        value={`Click ${id}`}
      />
    </div>
  )
}

export const UseCallback = () => {
  const [num, setNum] = useState(1)
  const addnum = () => {
    setNum((p) => p + 1)
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="p-3 border">{num}</div>
        <input
          className="p-3 border"
          type="button"
          onClick={addnum}
          value={"Click Local"}
        />
      </div>
      <Compo id={1} />
      <Compo id={2} />
    </>
  )
}
