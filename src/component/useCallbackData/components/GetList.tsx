import React, { useEffect, useState } from "react"

type Prop = {
  idx: number
  caller: string
}

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
  "flex-direction": "column",
}

export const GetList = ({ idx, caller }: Prop) => {
  console.log(`Caller:${caller} CBList[${idx}]`)
  const [data, setData] = useState<TData[]>([])

  useEffect(() => {
    console.log(`Caller:${caller} useEffect[${idx}]`)
    setData(serverData[idx - 1])
  }, [idx, caller])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        placeContent: "start",
      }}
    >
      {data &&
        data.map((item, idx) => (
          <div key={idx}>
            {item.id} : {item.name}
          </div>
        ))}
    </div>
  )
}
