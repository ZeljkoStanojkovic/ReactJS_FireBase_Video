import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Myaccount(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>Myaccount</div>
      </section>

      <section>{currentUser && currentUser.displayName}</section>
      <section>{currentUser && <div>{currentUser.email}</div>}</section>
      <section>결제내역</section>
    </div>
  );
}

export default Myaccount;
