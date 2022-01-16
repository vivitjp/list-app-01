import React from "react";
import "./Table.module.css";
import TR from "./TR";
import { ISamplePersonA } from './dataTypes/sampleData'

interface ITable {
  data: ISamplePersonA[] | null
}

const Table: React.VFC<ITable> = ({ data }) => {
  return (
    <table>
      <tbody>
        {data && data.map((objects: ISamplePersonA, index: number) =>
          <TR key={index.toString()} data={objects} />
        )}
      </tbody>
    </table>
  )
}

export default Table