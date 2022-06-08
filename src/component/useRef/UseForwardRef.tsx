import { ChangeEvent, useEffect, useRef, useState } from "react"
import { UseForwardInput } from "./UseForwardInput"

export const UseRefForwarder = () => {
  const [val, setVal] = useState("Hello")
  const el = useRef(null!)

  useEffect(() => {
    console.log(val)
  }, [val])

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }

  return <UseForwardInput ref={el} value={val} onChange={handle} />
}
