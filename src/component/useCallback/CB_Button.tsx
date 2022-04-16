import React from 'react'

//Buttonコンポーネント
interface Props {
  handler: () => void
  children: string
}

export const Button: React.FC<Props> = React.memo(
  ({ handler, children }) => {
    console.log("Button(Memo):", children);
    return <div><button onClick={handler}>{children}</button></div>
  }
);