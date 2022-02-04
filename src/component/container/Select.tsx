import React from 'react'
import { useState } from "react";

export interface ISelectItem { item: string }

interface IProps {
  Items: ISelectItem[]
  handle: (val: string) => void
}

const Select: React.VFC<IProps> = React.memo(({ Items, handle }): JSX.Element => {
  const [items, setItems] = useState<ISelectItem[]>(Items);
  console.log("Select");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handle(e.target.value)
  }

  return (
    <>
      <select onChange={handleChange} >{
        items && items.map((i) => {
          return <option key={i.item} value={i.item}>{i.item}</option>
        })
      }</select>
    </>
  );
});

export default Select