import React, { useState, useCallback } from 'react'
import { Button } from './components/CB_Button';
import { Input } from './components/CB_Input';

//: React.ChangeEvent<HTMLInputElement>
const AppCallback = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState({ lastName: '', firstName: '' })

  const setHandlerFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, firstName: e.target.value })
  }
  const setHandlerLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, lastName: e.target.value })
  }

  const incCounter = () => setCount(n => n + 1);
  const incCounterUC = useCallback(incCounter, []);

  const resCounter = () => setCount(0);
  const resCounterUC = useCallback(resCounter, []);

  return (
    <>
      <h1>AppCallbackTS</h1>

      <p>{`${count}回クリック`}</p>
      <Button handler={incCounterUC}>ボタン(useCallback)</Button>
      <Button handler={incCounter}>ボタン(No useCB)</Button>
      <Button handler={resCounterUC}>リセット(useCallback)</Button>
      <Button handler={resCounter}>リセット(No useCB)</Button>

      <hr style={{ margin: "20px", color: "white" }} />

      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form>
        <Input handler={setHandlerFirst} value={name.firstName} />
        <Input handler={setHandlerLast} value={name.lastName} />
      </form>
    </>
  )
}

export default AppCallback
