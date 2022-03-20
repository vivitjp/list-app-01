import Debug from "component/debug/Debug"
import { useImageUploader } from "lib/useImageUploader"
import React, { useEffect, useState } from "react"

const CSS = {
  display: "flex",
  jsutifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "5px",
}

type TData = {
  id: number
  name: string
}

type Prop = {
  serverData: TData[][]
  idx: number
  setter: React.Dispatch<React.SetStateAction<string>>
}

//========================================
// React.memo なしのJSX
//========================================
export const GetList = ({ idx, serverData, setter }: Prop) => {
  console.log(`%c[Non-Memo] IN[idx:${idx}]`, "color:blue")
  const [data, setData] = useState<TData[]>([])
  const { imageSrc, ImageButton } = useImageUploader()

  useEffect(() => {
    console.log(`%c[Non-Memo] useEffect[idx: ${idx}]`, "color:blue")
    setData(serverData[idx - 1])
  }, [idx, serverData, setter])

  const handler = () => {
    setter(imageSrc)
  }

  return (
    <>
      <Debug msg="[Non-Memo] JSX" color="blue" />
      <div style={CSS}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          {data &&
            data.map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: "100%",
                  justifyContent: "start",
                  border: "1px solid #AAA",
                }}
              >
                {item.id} : {item.name}
              </div>
            ))}
        </div>
        <ImageButton />
        <img src={imageSrc} width={100} height={100} />
        <button onClick={handler}>SAVE</button>
      </div>
    </>
  )
}
