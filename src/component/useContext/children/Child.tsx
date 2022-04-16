import React, { useContext } from "react"
import { UserContext } from "../AppContext"
import styles from "./Child.module.scss"

const Child = () => {
  const userData = useContext(UserContext)

  return (
    <>
      <div>
        {userData &&
          Object.entries(userData).map(([name, value]: [string, string]) => {
            return (
              <div key={name} className={styles.cls_line}>
                <span className={styles.cls_cell} style={{ minWidth: "7rem" }}>
                  {name}
                </span>
                <span className={styles.cls_cell}>{value}</span>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Child
