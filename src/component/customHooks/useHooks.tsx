import React, { useCallback, useState } from "react"

export const useHooks = (initValue: string) => {
  //const [value, setValue] = useState<string>()
  //if (initValue) setValue(initValue) <--- infinit loop

  console.log("useHooks IN")
  const [value, setValue] = useState<string>(initValue || "")

  const setVal = useCallback((val: string) => {
    console.log("useHooks setVal")
    setValue(val)
  }, [])

  return { setVal, value }
}

type Props = { initValue: string }

export const Compo = React.memo(({ initValue }: Props) => {
  const [value, setValue] = useState<string>(initValue || "")

  return (
    <>
      <button onClick={() => setValue("NEW")}>set New2</button>
      <div>{value}</div>
    </>
  )
})
