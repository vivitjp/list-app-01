import React from "react";   //, { useContext }
import "./Table.module.css";
import TD from './TD';
import { ISamplePersonA } from './dataTypes/sampleData'

//import { Context } from "../AppBody";

type valTypes = boolean | string | number | undefined

interface ITR {
  data: ISamplePersonA
}

const TR: React.VFC<ITR> = ({ data }) => {
  // const ActiveContext = useContext(Context);
  // const dataObj: { [name: string]: valTypes } = { ...data }

  return (
    <tr>
      {/* {data && Object.entries(ActiveContext).map(([name, bool]: [string, boolean]) => {
        return bool && dataObj[name] ? <TD key={name} data={dataObj[name]} /> : null
      })  外部Contextに依存するとテスト不可能？ } */}

      {data && Object.entries(data).map(([name, value]: [string, valTypes]) => {
        return <TD key={name} data={value} />
      })  /* 依存しないとテストが可能 */}
    </tr>
  )
}

export default TR