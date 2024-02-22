import { Context } from "@/context/context";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(Context);
  return (
    <>
      <p style={{ color: "#fff" }}>username: {user?.username}</p>
      <p style={{ color: "#fff" }}>token: {user?.token}</p>
      <p style={{ color: "#fff" }}>status: {user?.status}</p>
      <p style={{ color: "#fff" }}>saldo: {user?.saldo}</p>
      <p style={{ color: "#fff" }}>password: {user?.password}</p>
      <p style={{ color: "#fff" }}>id: {user?.id}</p>
      <p style={{ color: "#fff" }}>criptomoeda: {user?.criptomoeda}</p>
    </>
  )
}

export default Profile