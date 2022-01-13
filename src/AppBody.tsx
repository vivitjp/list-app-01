import React, { useState, useEffect } from "react";
import { REST_GET_Json } from './lib/lib_db'
import Table from './component/Table'

const fakeData = [
  {
    "lastname": "杉本", "firstname": "宗介", "sex": "男", "age": 45,
    "ken": "愛知県", "city": "あま市", "company": "株式会社アラームアドバイザー設計",
    "department": "広報部", "title": "参事", "start_date": "Wed Jan 12 2022 03:04:51", "act": true
  },
  {
    "lastname": "吉田", "firstname": "要", "sex": "男", "age": 47,
    "ken": "北海道", "city": "北広島市", "company": "株式会社デジタルホーム貿易",
    "department": "購買部", "title": "最高技術責任者", "start_date": "Wed Jan 12 2022 03:04:51", "act": true
  },
]

const AppBody = (): JSX.Element => {
  const [data, setData] = useState<{}[] | null>(null);

  let url: string = ''

  let dataSource = 2;
  switch (dataSource) {
    case 1:
      url = `http://localhost:3000/10`;
      break;
    case 2:
      url = 'https://vercel-express-ts-01.vercel.app/10'
  }

  //非同期通信
  useEffect(() => {
    (async () => {
      const dataArray = await REST_GET_Json(url); // データ取得
      if (!dataArray) { setData(null); return (<></>); }
      //console.log(dataArray)
      setData(dataArray);
    })();
  }, [url]);

  return (
    <>{
      data && <Table table_data={data} />
    }</>
  )
}

export default AppBody