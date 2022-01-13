import React from "react";
import "./Table.module.css";

//obj_data は辞書型
interface Props {
  td_data: string
}

const TD: React.VFC<Props> = ({ td_data }) => {
  return <>
    {td_data && <td>{td_data}</td>}
  </>
}

export default TD;
