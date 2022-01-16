import React from "react";
import "./Table.module.css";
//import { ISamplePersonA } from '../dataTypes/sampleData'

interface ITD {
  data: any
}

const getPrimitiveType = (attrName: any) => {

  let fontColor = 'black';

  switch (typeof attrName) {
    case 'number': fontColor = 'red'; break;
    //default: 
  }

  return { color: fontColor }
}

const getBoolString = (value: boolean) => {
  return value ? '✔' : ''
}

const TD: React.VFC<ITD> = ({ data }) => {
  return <>
    {data && <td style={getPrimitiveType(data)}>{
      typeof data === 'boolean' ? getBoolString(data) : data
    }</td>}
  </>
}

export default TD;