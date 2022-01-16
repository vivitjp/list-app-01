import React, { useContext } from "react";
import { UserContext } from "../AppContext";
import styles from './Child.module.scss';

interface IPropData {
  data: { name: string | number | boolean }
}
const Child: React.VFC<IPropData> = (props) => {
  const userData = useContext(UserContext);

  return (
    <>
      <div>User: {props.data.name}</div>
      <div>
        {userData && Object.entries(userData).map(([name, value]: [string, string | number | boolean]) => {
          return (
            <div key={name} className={styles.cls_line}>
              <span className={styles.cls_cell} style={{ minWidth: "7rem" }}>{name}</span>
              <span className={styles.cls_cell}>{value}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Child