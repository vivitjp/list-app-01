import React, { useState, useEffect } from 'react'

const AppEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState({ lastName: '', firstName: '' })

  useEffect(() => {
    document.title = `${count} 回クリック`
  }, [count])

  const setHandlerFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, firstName: e.target.value })
  }

  const setHandlerLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, lastName: e.target.value })
  }

  return (
    <>
      <p>{`${count}回クリック`}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>ボタン</button>
      <button onClick={() => setCount(0)}>リセット</button>

      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form>
        <input value={name.lastName} onChange={setHandlerLast} />
        <input value={name.firstName} onChange={setHandlerFirst} />
      </form>
    </>
  )
}

export default AppEffect
