import React, { useState, useCallback } from 'react'

const Button = React.memo(({ handleClick, value }) => {
  console.log('BUtton', value)
  return <button type="button" onClick={handleClick}>{value}</button>
})

const Count = React.memo(({ text, counter }) => {
  console.log('Count', counter)
  return <div>{text}: {counter}</div>
})

const SimpleCallback = () => {
  const [counter, setCounter] = useState(0)

  //反復してコールされる
  const incCounter1 = () => setCounter(counter + 1)

  //useCallBack()
  const incCounter2 = useCallback(() => setCounter(counter + 1), [counter])

  return (
    <>
      <Count text="+ 1 ボタン" counter={counter} />
      <Button handleClick={incCounter1} value={'+1 ボタン'} />
      <Button handleClick={incCounter2} value={'+1 ボタン(use)'} />
    </>
  )
}

export default SimpleCallback