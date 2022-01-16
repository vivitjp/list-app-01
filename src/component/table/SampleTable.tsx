import { useState, useEffect, createContext } from "react";
import { REST_GET_Json } from '../../lib/lib_db'
import Table from './Table'
import { ISamplePersonA } from './dataTypes/sampleData'

interface IActiveCols {
  [name: string]: boolean
}

const activeCols: IActiveCols = {
  last_name: true,
  first_name: true,
  ken: true,
  city: true,
  sex: true,
  age: true,
  start_date: false,
  act: true,
}

export const Context = createContext<IActiveCols>({})

const AppBody = (): JSX.Element => {
  const [data, setData] = useState<ISamplePersonA[] | null>(null);

  let url: string = ''

  let dataSource = 1;
  switch (dataSource) {
    case 1:
      url = `http://localhost:3000/2`;
      break;
    case 2:
      url = 'https://vercel-express-ts-01.vercel.app/2'
  }

  //非同期通信
  useEffect(() => {
    (async () => {
      const dataArray = await REST_GET_Json(url); // データ取得
      console.log(dataArray)   //[{}{}]
      if (!dataArray) { setData(null); return (<></>); }
      setData(dataArray);
    })();
  }, [url]);

  return (
    <Context.Provider value={activeCols}>{
      data && <Table data={data} />
    }</Context.Provider>
  )
}

export default AppBody