import React from "react";
import "./Table.module.css";
import TR from "./TR";

interface Props {
  table_data: {}[]
}

//DATA形式: [{NAME:"VALUE",...},...]
const Table: React.FC<Props> = ({ table_data }) => {
  return (
    <table>
      <tbody>
        {table_data && table_data.map((tr_data: any, index: number) =>
          <TR key={index.toString()} tr_data={tr_data} />
        )}
      </tbody>
    </table>
  )
}

export default Table;
//        {console.log(table_data)}
