// --------------------------------
// UseRefArray
// --------------------------------

import React, { useRef, createRef, RefObject } from "react"

export const UseRefArray = () => {
  const cells = ["name", "addr", "zip"]
  const refs = useRef<RefObject<unknown>[]>(
    Array.from({ length: cells.length }, (a) => createRef())
  )
  // const refs = useRef<RefObject<unknown[]>>(null!)
  // cells.forEach((_, i) => {
  //   refs.current[i] = createRef<unknown>()
  // })

  const handleSubmit = (e) => {
    cells.map((n, i) => {
      console.log(refs.current[i].current.value) //二重current
    })
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {cells.map((cell, i) => {
        return (
          <p key={cell}>
            <MyInput ref={refs.current[i]} value={cell} />
          </p>
        )
      })}
      <input type="submit" value="Submit" />
    </form>
  )
}
