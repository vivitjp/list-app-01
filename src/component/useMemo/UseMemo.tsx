import { useMemo, useState } from "react"

export const UseMemo = () => {
  const [a, setA] = useState(10)
  const [b, setB] = useState(8)

  const value = useMemo(() => a * b, [a, b])

  return (
    <>
      <input type="button" value={"Set A"} onClick={() => setA((p) => p + 1)} />
      <input type="text" value={a} />
      <input type="button" value={"Set B"} onClick={() => setB((p) => p + 1)} />
      <input type="text" value={b} />
      <div>{value}</div>
    </>
  )
}

// const getPower = (a: number, b: number) => {
//   console.log("getPower")
//   return a ** b
// }

// const Heavy = ({ a, b }: { a: number; b: number }) => {
//   console.log("Heavy")
//   const value = useMemo(() => getPower(a, b), [a, b])
//   return <>{value}</>
// }

// export const UseMemo = () => {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <button onClick={() => setCount((p) => p + 1)}>Up</button>
//       <Heavy a={10} b={10} />
//       <div>{count}</div>
//     </>
//   )
// }
