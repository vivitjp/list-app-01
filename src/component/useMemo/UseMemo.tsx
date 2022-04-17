import { useMemo, useState } from "react"

export const UseMemo = () => {
  const [a, setA] = useState(10)
  const [b, setB] = useState(8)

  //State として使用される
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
