import React, { useContext } from "react";
import { UserContext } from "../AppContextMin";

const Child: React.VFC<{ data: string }> = ({ data }) => {
  const userData = useContext(UserContext);

  return (
    <div>User:【{data}】, Context引数:【{userData}】</div>
  )
}

export default Child