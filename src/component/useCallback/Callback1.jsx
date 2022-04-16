import React, { useState, useCallback } from "react"

const Count = React.memo(({ counter }) => {
  console.log(`Count`)
  return (
    <div className="flex flex-0 m-0 justify-center items-center w-40 border">
      {counter}
    </div>
  )
})

const Button = React.memo(({ handleClick, name }) => {
  console.log(`Button`, name)
  return (
    <button
      type="button"
      onClick={handleClick}
      value="Click"
      className="flex flex-0 m-0 justify-center items-center w-40 border"
    >
      ボタン {name}
    </button>
  )
})

export const Callback1 = () => {
  const [counter, setCounter] = useState(0)

  //引数なし: useCallback は有効
  const handle2 = useCallback(() => {
    console.log(`%chandle2`, "color:blue")
    setCounter(counter + 1)
  }, [counter])

  //引数あり: useCallback は無効
  const handle2param = useCallback(
    (val) => {
      console.log(`%chandle2`, "color:red")
      setCounter(counter + val)
    },
    [counter]
  )

  return (
    <>
      <div className="flex flex-row justify-start">
        <Count counter={counter} />
        <Button handleClick={handle2} name="1" />
        <Button handleClick={() => handle2param(3)} name="2" />
      </div>
    </>
  )
}
