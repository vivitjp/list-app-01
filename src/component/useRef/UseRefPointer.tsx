//--------------------------------
// Pointer
//--------------------------------
import { ChangeEvent, useRef } from "react"

export function UseRefPointer() {
  const btnRef = useRef<HTMLInputElement>(null!)

  const handle = () => {
    btnRef.current.focus()
  }

  //useState の代わりに useRef で値を保存
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
