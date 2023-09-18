import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "./users/authSlice";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const keluar = () => {
    dispatch(logOut());
  };
  const data = useSelector((state) => state);

  return (
    <div>
      <h1>Home</h1>
      <h3>Halo {data.auth.user}</h3>
      <button onClick={keluar}>Logout</button>
    </div>
  );
}
