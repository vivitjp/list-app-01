import React, { useContext } from "react";
import "./Table.module.css";
import TD from './TD';
import { ISamplePersonA } from '../dataTypes/sampleData'

import { Context } from "../AppBody";

type valTypes = boolean | string | number | undefined

interface ITR {
  data: ISamplePersonA
}

const TR: React.VFC<ITR> = ({ data }) => {
  //console.log(data)

  // Object.entries(data).map(([name, value]: [string, string | undefined]) => {
  //   console.log(1, name, name in data, value,)  //data[name]
  // });

  const ActiveContext = useContext(Context);
  const dataObj: { [name: string]: boolean | string | number | undefined } = { ...data }

  return (
    <tr>
      {data && Object.entries(ActiveContext).map(([name, bool]: [string, boolean]) => {
        return bool ? <TD key={name} data={dataObj[name]} /> : null
      })}

      {/* {data && Object.entries(data).map(([name, value]: [string, valTypes]) => {
        return ActiveContext[name] ? <TD key={name} data={value} /> : null
      })} */}
    </tr>
  )
}

export default TR