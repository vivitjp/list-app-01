import { useReducer } from "react"

type Store = { count: number }
type ActionType = { type: "inc" } | { type: "dec" }

const initialState = { count: 0 }

function reducer(state: Store, action: ActionType) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 }
    case "dec":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  )
}
