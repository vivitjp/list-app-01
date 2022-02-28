import React, { useState, useCallback } from "react"
import { GetList } from "./components/GetList"
import { GetListUC } from "./components/GetListUC"
import "./style.module.css"

export const CallbackData = () => {
  const [num1, setNum1] = useState<number>(0)
  const [num2, setNum2] = useState<number>(0)

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          border: "1px solid #AAA",
          marginBottom: "5px",
        }}
      >
        <button onClick={() => setNum1(1)}>1</button>
        <button onClick={() => setNum1(2)}>2</button>
        <GetList caller={"1"} idx={num1} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          border: "1px solid #AAA",
          marginBottom: "5px",
        }}
      >
        <button onClick={() => setNum2(1)}>1</button>
        <button onClick={() => setNum2(2)}>2</button>
        <GetListUC caller={"2"} idx={num2} />
      </div>
    </>
  )
}
