import React from 'react'
import { useEffect, useState } from "react";

interface IDataObject { name: string }
const initData: IDataObject = { name: "John" }

const AForm: React.VFC = (): JSX.Element => {
  const [data, setData] = useState<IDataObject>({ name: '' });

  useEffect(() => { setData(initData) }, [])

  const handleSetOptData = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData({ name: "任意のデータ" })
  }

  return (<>
    <button onClick={(e) => { handleSetOptData(e) }}>Change</button>
    <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
  </>);
}

export default AForm