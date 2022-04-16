import React from "react"

interface Prop {
  ref: any
}

const Child = ({ ref }: Prop) => {
  const setNewVal = () => {
    ref.current.color = "Red" //NG: sizeは元値
  }

  return <button onClick={() => setNewVal()}>Make Red</button>
}

export default Child
