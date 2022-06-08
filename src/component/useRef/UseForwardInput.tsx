import { forwardRef } from "react"

export const UseForwardInput = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>((props, ref) => {
  return <input type="text" {...props} ref={ref} />
})
