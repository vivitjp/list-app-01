import React, { useState } from 'react'

export interface IRadioItem { key: string, item: string }

interface IProps {
  Items: IRadioItem[]
  handle: (val: string) => void
}

const Radio: React.VFC<IProps> = React.memo(({ Items, handle }): JSX.Element => {
  const [items, setItems] = useState<IRadioItem[]>(Items);
  console.log("Radio");

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    handle(e.currentTarget.value)
  }

  return (
    <>
      {items && items.map((i) => {
        return (
          <label key={i.key} style={{ margin: "10px" }}>
            <input type="radio" name="radioName" key={i.key}
              value={i.key} onClick={handleClick} />
            {i.item}
          </label>
        )
      })}
    </>
  );
});

export default Radio