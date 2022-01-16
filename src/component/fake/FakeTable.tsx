import React, { useState, useEffect } from "react";
import "./FakeTable.css"

const fakeData = {
  data: [
    {
      "last_name": "杉本", "first_name": "宗介", "sex": "男", "age": 50,
      "start_date": "Wed Jan 12 2022 03:04:51", "act": true
    },
    {
      "last_name": "吉田", "first_name": "要", "sex": "男", "age": 47,
      "start_date": "Wed Jan 12 2022 03:04:51", "act": true
    },
  ]
}

interface IObjSet {
  last_name: string
  first_name: string
  sex?: string
  age?: number
  start_date?: string
  act?: boolean
}

interface ITable {
  data: IObjSet[] | null
}

const Table = (): JSX.Element => {
  const [dataObj, setDataObj] = useState<ITable>({ data: [] });

  useEffect(() => {
    setDataObj(fakeData)
  }, [])

  return (
    <table>{
      dataObj && <TableBody data={dataObj.data} />
    }</table>
  )
}

const TableBody: React.VFC<ITable> = ({ data }): JSX.Element => {
  return (
    <tbody>
      {data && data.map((tr_data: IObjSet, index: number) =>
        <TR key={index.toString()} data={tr_data} />
      )}
    </tbody>
  )
}

interface ITR {
  data: IObjSet | null
}

const TR: React.VFC<ITR> = ({ data }): JSX.Element => {
  return <>
    <tr>
      {data && Object.entries(data).map((value: [string, string]) => {
        return <TD key={value[0]} data={value[1]} />
      })}
    </tr>
  </>
}

interface ITD {
  data: string | boolean | number
}

const TD: React.VFC<ITD> = ({ data }): JSX.Element => {
  return <>
    {data && <td>{data}</td>}
  </>
}

export default Table