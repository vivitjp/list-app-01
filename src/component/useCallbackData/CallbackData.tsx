//=================================================
// 現状では、React.memo をチャイルドコンポに用いることで、
// useCallBack を使用せずとも再描画回数に変化なし
//=================================================

import React, { useState, useCallback } from "react"
import { GetList } from "./components/GetList"
import { GetListUC } from "./components/GetListUC"
import "./style.module.css"

type TData = {
  id: number
  name: string
}

type TServerData = TData[]

const serverData: TServerData[] = [
  [
    { id: 1, name: "John" },
    { id: 2, name: "James" },
    { id: 3, name: "Telly" },
  ],
  [
    { id: 1, name: "Karen" },
    { id: 2, name: "Lily" },
    { id: 3, name: "Rose" },
  ],
]

const CSS = {
  display: "flex",
  jsutifyContent: "space-between",
  alignItems: "center",
  width: "100px",
  border: "1px solid #CCC",
  margin: "5px",
}

export const CallbackData = () => {
  const [num1, setNum1] = useState<number>(0)
  const [imgSrc1, setImgSrc1] = useState<string>("")
  const [num2, setNum2] = useState<number>(0)
  const [imgSrc2, setImgSrc2] = useState<string>("")

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid #AAA",
          marginBottom: "5px",
        }}
      >
        <div style={CSS}>Non-Memo</div>
        <button onClick={() => setNum1(1)}>A</button>
        <button onClick={() => setNum1(2)}>B</button>
        <div style={{ ...CSS, width: "500px", flexDirection: "column" }}>
          <GetList idx={num1} serverData={serverData} setter={setImgSrc1} />
        </div>
      </div>

      <div style={{ ...CSS, width: "100%" }}>{imgSrc1}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          border: "1px solid #AAA",
          marginBottom: "5px",
        }}
      >
        <div style={CSS}>Memo</div>
        <button onClick={() => setNum2(1)}>X</button>
        <button onClick={() => setNum2(2)}>Y</button>
        <div style={{ ...CSS, width: "500px", flexDirection: "column" }}>
          <GetListUC idx={num2} serverData={serverData} setter={setImgSrc2} />
        </div>
      </div>

      <div style={{ ...CSS, width: "100%" }}>{imgSrc2}</div>
    </>
  )
}
