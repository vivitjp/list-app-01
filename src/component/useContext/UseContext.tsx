import { createContext } from "react"
import Child from "./children/Child"

const userData = {
  userid: "john123",
  password: "asd",
}
interface IUserData {
  [name: string]: string
}
export const UserContext = createContext<IUserData>({})

export const UseContext = (): JSX.Element => {
  return (
    <UserContext.Provider value={userData}>
      <Child />
    </UserContext.Provider>
  )
}
