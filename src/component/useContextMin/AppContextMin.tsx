import { createContext } from "react"
import Child from './children/Child'

export const UserContext = createContext<string>("")

const AppContext = (): JSX.Element => {
  return (
    <UserContext.Provider value={"与えた値"} >
      <Child data={"子コンポへの引数値"} />
    </UserContext.Provider>
  )
}

export default AppContext