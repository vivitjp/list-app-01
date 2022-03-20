import React from "react"

type Props = {
  msg: string
  color?: string
}

const Debug = ({ msg, color = "black" }: Props) => {
  console.log(`%c${msg}`, `color: ${color}`)
  return <></>
}

export default Debug
