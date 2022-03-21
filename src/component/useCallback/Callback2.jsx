import React, { useState, useCallback, useMemo } from "react"

//====================================
// Button
//====================================
const Input = React.memo(({ idx, handler, value, css = {} }) => {
  console.log(
    `%cInput(${idx}): ${value}`,
    `color:${idx === 1 ? "red" : "blue"}`
  )
  return (
    <input
      type="text"
      onChange={handler}
      defaultValue={value}
      style={{ ...cssParts, ...css }}
    />
  )
})

//====================================
// Main
//====================================
export const Callback2 = () => {
  const [name, setName] = useState({ lastName: "", firstName: "" })

  const handleFirst = useCallback(
    (e) => {
      console.log(`%chandleFirst`, "color:orange")
      setName({ ...name, firstName: e.target.value })
    },
    [name]
  )

  const handleLast = useCallback(
    (e) => {
      console.log(`%chandleLast`, "color:orange")
      setName({ ...name, lastName: e.target.value })
    },
    [name]
  )

  return (
    <>
      <div style={cssDiv}>
        <div
          style={cssParts}
        >{`私の名前は${name.lastName} ${name.firstName}です`}</div>
        <Input
          idx={1}
          value={name.firstName}
          handler={handleFirst}
          css={{ flexShrink: "2" }}
        />
        <Input
          idx={2}
          value={name.lastName}
          handler={handleLast}
          css={{ flexShrink: "2" }}
        />
      </div>
    </>
  )
}

const cssParts = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  marginLeft: "10px",
  padding: "5px",
  minWidth: "100px",
  width: "100%",
  border: "1px solid #EEE",
}

const cssDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  padding: "5px",
  border: "1px solid #EEE",
}
