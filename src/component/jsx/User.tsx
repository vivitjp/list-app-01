import React, { useState, useEffect } from "react";

interface IProps { id: number }
interface IUser { name: string, age: number, address: string }
const dataUserInit: IUser = { name: "", age: 0, address: "" }
const dataUserMock: IUser = { name: "John", age: 32, address: "Tokyo" }

const User: React.VFC<IProps> = (props): JSX.Element => {
  const [user, setUser] = useState<IUser>(dataUserInit);

  useEffect(() => {
    (async (id: number) => {
      const response = await Promise.resolve(dataUserMock);
      setUser(response);
    })(props.id);
  }, []);

  if (!user) { return <div>"loading..."</div> }

  return (
    <>
      <div>{user.name}</div>
      <div><strong>{user.age}</strong> years old</div>
      <div>lives in {user.address}</div>
    </>
  );
}

export default User;