import Debug from "component/debug/Debug"
import React, { useEffect, useState } from "react"
import { useImageUploader } from "lib/useImageUploader"

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
// React.memo ありのJSX
//========================================
export const GetListUC = React.memo(({ idx, serverData, setter }: Prop) => {
  console.log(`%c[MEMO] IN[idx:${idx}]`, "color:red")
  const [data, setData] = useState<TData[]>([])
  const { imageSrc, ImageButton } = useImageUploader()

  useEffect(() => {
    console.log(`%c[MEMO] useEffect[idx:${idx}]`, "color:red")
    setData(serverData[idx - 1])
  }, [idx, serverData])

  const handler = () => {
    setter(imageSrc)
  }

  return (
    <>
      <Debug msg="[Memo] JSX" color="red" />
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
})
