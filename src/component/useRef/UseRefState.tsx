import { useRef, useState } from "react"

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
