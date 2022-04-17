import React, { useContext } from "react"
import { UserContext } from "../UseContext"

const Child = () => {
  const userData = useContext(UserContext)

  return (
    <>
      <div>
        {userData &&
          Object.entries(userData).map(([name, value]: [string, string]) => {
            return (
              <div key={name} className="flex flex-row">
                <span
                  className="flex flex-0 m-0 border"
                  style={{ minWidth: "7rem" }}
                >
                  {name}
                </span>
                <span className="flex flex-0 m-0 border">{value}</span>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Child
