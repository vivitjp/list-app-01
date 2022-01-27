import React, { useState, useCallback, useMemo } from 'react'

//Buttonコンポーネント(子)
const Button = React.memo(({ handler, children }) => {
  console.log("Button:", children);
  return <div><button onClick={handler}>{children}</button></div>
});

//Buttonコンポーネント(子)
const Input = React.memo(({ handler, value }) => {
  console.log("Input:", value);
  return <div><input type="text" onChange={handler} value={value} /></div>
});

//: React.ChangeEvent<HTMLInputElement>
const AppCallback = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState({ lastName: '', firstName: '' })

  const setHandlerFirst = (e) => { setName({ ...name, firstName: e.target.value }) }
  const setHandlerLast = (e) => { setName({ ...name, lastName: e.target.value }) }

  const incCounter = () => setCount(n => n + 1);
  const incCounterUC = useCallback(() => setCount(n => n + 1), []);

  const resCounter = () => setCount(0);
  const resCounterUC = useCallback(() => setCount(0), []);

  return (
    <>
      <p>{`${count}回クリック`}</p>
      <Button handler={incCounterUC}>ボタン(useCallback)</Button>
      <Button handler={incCounter}>ボタン</Button>
      <Button handler={resCounterUC}>リセット(useCallback)</Button>
      <Button handler={resCounter}>リセット</Button>

      <hr style={{ margin: "20px", color: "white" }} />

      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form>
        <Input value={name.firstName} handler={setHandlerFirst} />
        <Input value={name.lastName} handler={setHandlerLast} />
      </form>
    </>
  )
}

export default AppCallback
