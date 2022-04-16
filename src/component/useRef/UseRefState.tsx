import React, { createRef, MutableRefObject, RefObject, useEffect } from "react"
import { ChangeEvent, useRef, useState } from "react"

//--------------------------------
// State
//--------------------------------
export function UseRefStateSatet() {
  const [count, setCount] = useState(0)
  const aRef = useRef<number>(0)
  let aVal = 0 //毎回 0 に初期化

  const handler = () => {
    console.log("Called")
    aRef.current++ //加算値維持
    aVal++ //加算は毎回初期化、永遠に0
    setCount((p) => p + 1) //stateは維持
  }

  return (
    <div className="flex flex-col border">
      <div className="flex justify-center">Ref値: {aRef.current}</div>
      <div className="flex justify-center">一般変数値: {aVal}</div>
      <button className="flex justify-center bg-gray-100" onClick={handler}>
        ステート値: {count}
      </button>
    </div>
  )
}

//--------------------------------
// Pointer
//--------------------------------
export function UseRefPointer() {
  const btnRef = useRef<HTMLInputElement>(null!)

  const handle = () => {
    btnRef.current.focus()
  }

  const divRef = useRef<HTMLDivElement>(null!)

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    divRef.current.innerHTML = e.currentTarget.value
  }

  return (
    <div className="flex flex-col border w-full">
      <div className="flex flex-row justify-start items-center p-3 w-full">
        <button className="w-30 border m-1" onClick={handle}>
          input1
        </button>
        <input
          type="text"
          className="w-50 border m-1 p-2"
          ref={btnRef}
          onChange={change}
        />
        <div className="w-50 border m-1 p-2" ref={divRef} />
      </div>
    </div>
  )
}

//--------------------------------
// Forwarding
//--------------------------------
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

//--------------------------------
// UseRefArray
//--------------------------------
// export const UseRefArray = () => {
//   const cells = ["name", "addr", "zip"]
//   const refs = useRef<React.RefObject<unknown>[]>(
//     Array.from({ length: cells.length }, (a) => React.createRef())
//   )
//   // const refs = useRef<RefObject<unknown[]>>(null!)
//   // cells.forEach((_, i) => {
//   //   refs.current[i] = createRef<unknown>()
//   // })

//   const handleSubmit = (e) => {
//     cells.map((n, i) => {
//       console.log(refs.current[i].current.value) //二重current
//     })
//     e.preventDefault()
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {cells.map((cell, i) => {
//         return (
//           <p key={cell}>
//             <MyInput ref={refs.current[i]} value={cell} />
//           </p>
//         )
//       })}
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }
