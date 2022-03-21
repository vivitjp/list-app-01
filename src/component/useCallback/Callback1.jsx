import React, { useState, useCallback } from "react"

const cssParts = { display: "flex", flexDirection: "row", marginLeft: "10px" }

const Count = React.memo(({ name, counter, color }) => {
  console.log(`%cCount ${name}`, `color:${color}`)
  return (
    <div style={cssParts}>
      {name}: {counter}
    </div>
  )
})

const Button = React.memo(({ handleClick, name, color, withE = false }) => {
  console.log(`%cButton ${name}: wiwithE ${String(withE)}`, `color:${color}`)
  return (
    <div style={cssParts}>
      <button
        type="button"
        onClick={handleClick}
        value={name}
        style={{ width: "200px" }}
      >
        ボタン {name}
      </button>
    </div>
  )
})

const cssDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContenst: "start",
  alignItems: "center",
  padding: "5px",
}

export const Callback1 = () => {
  console.log(`%cCallback1`, "color:red")

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handle1 = () => {
    console.log(`%chandle1`, "color:orange")
    setCounter1(counter1 + 1)
  }
  const handle1param = (val) => {
    console.log(`%chandle1(param)`, "color:orange")
    setCounter1(counter1 + val)
  }

  //引数なし: useCallback は有効
  const handle2 = useCallback(() => {
    console.log(`%chandle2`, "color:blue")
    setCounter2(counter2 + 1)
  }, [counter2])

  //引数あり: useCallback は無効
  const handle2param = useCallback(
    (val) => {
      console.log(`%chandle2(param)`, "color:blue")
      setCounter2(counter2 + val)
    },
    [counter2]
  )

  return (
    <>
      <div style={cssDiv}>
        <Count counter={counter1} name={"1"} color={"orange"} />
        <Button handleClick={handle1} name={"1"} color={"orange"} />
        <Button
          handleClick={() => handle1param(3)}
          name={"1(true)"}
          color={"darkOrange"}
          withE={true}
        />
      </div>
      <div style={cssDiv}>
        <Count counter={counter2} name={"2"} color={"blue"} />
        <Button handleClick={handle2} name={"2"} color={"blue"} />
        <Button
          handleClick={() => handle2param(3)}
          name={"2(true)"}
          color={"darkBlue"}
          withE={true}
        />
      </div>
    </>
  )
}
