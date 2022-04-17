import React from "react"
import { ChangeEvent, useEffect, useRef, useState } from "react"

const MyInput = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>((props, ref) => {
  return <input type="text" {...props} ref={ref} />
})

export const UseRefForwarder = () => {
  const [val, setVal] = useState("Hello")
  const el = useRef(null!)

  useEffect(() => {
    console.log(val)
  }, [val])

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }

  return <MyInput ref={el} value={val} onChange={handle} />
}
