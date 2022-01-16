import { createContext } from "react"
import Child from './children/Child'

const userData = {
  "userid": "john123", "password": "asd", "act": true
}
interface IUserData {
  [name: string]: string | number | boolean
}
export const UserContext = createContext<IUserData>({})

const AppContext = (): JSX.Element => {
  return (
    <UserContext.Provider value={userData} >
      <Child data={{ name: "john" }} />
    </UserContext.Provider>
  )
}

export default AppContext