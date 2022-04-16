import React, { useCallback } from "react"
import { Compo, useHooks } from "./useHooks"

export const IndexCustomHooks = () => {
  const { setVal, value } = useHooks("OLD")

  const handler = useCallback(() => {
    console.log("handler")
    setVal("NEW")
  }, [])

  return (
    <div>
      <div>
        <button onClick={handler}>Set NEW</button>
      </div>
      <div>{value}</div>
      <Compo initValue="OLD" />
    </div>
  )
}
