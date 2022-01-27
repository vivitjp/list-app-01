import React from 'react'

//Input コンポーネント
interface Props {
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input: React.FC<Props> = React.memo(
  ({ handler, value }) => {
    console.log("Input(Memo):", value);
    return <div><input type="text" onChange={handler} value={value} /></div>
  }
);