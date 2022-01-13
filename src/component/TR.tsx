import React from "react";
import "./Table.module.css";
import TD from './TD';

//table data は配列
interface Props {
  [index: string]: string
}

const TR: React.VFC<Props> = ({ tr_data }) => {
  //console.log(tr_data)
  return <>
    <tr>
      {tr_data && Object.entries(tr_data).map((value: [string, string], index: number) => {
        return <TD key={index.toString()} td_data={value[1]} />
      })}
    </tr>
  </>
}

export default TR;


