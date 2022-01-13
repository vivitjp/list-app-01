import React, { useState } from "react";

const fakeData = [
  {
    "lastname": "杉本", "firstname": "宗介", "sex": "男", "age": 45,
    "start_date": "Wed Jan 12 2022 03:04:51", "act": true
  },
  {
    "lastname": "吉田", "firstname": "要", "sex": "男", "age": 47,
    "start_date": "Wed Jan 12 2022 03:04:51", "act": true
  },
]

const FakeBody = (): JSX.Element => {
  const [data] = useState<{}[] | null>(fakeData);
  return (
    <table>{
      data && <Table table_data={data} />
    }</table>
  )
}

interface TableProps {
  table_data: {}[]
}

//DATA形式: [{NAME:"VALUE",...},...]
const Table: React.FC<TableProps> = ({ table_data }) => {
  return (
    <tbody>
      {table_data && table_data.map((tr_data: any, index: number) =>
        <TR key={index.toString()} tr_data={tr_data} />
      )}
    </tbody>
  )
}

interface TRProps {
  [index: string]: string
}

const TR: React.VFC<TRProps> = ({ tr_data }) => {
  //console.log(tr_data)
  return <>
    <tr>
      {tr_data && Object.entries(tr_data).map((value: [string, string], index: number) => {
        return <TD key={index.toString()} td_data={value[1]} />
      })}
    </tr>
  </>
}

interface TDProps {
  td_data: string
}

const TD: React.VFC<TDProps> = ({ td_data }) => {
  return <>
    {td_data && <td>{td_data}</td>}
  </>
}

export default FakeBody