import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
//TODO:
//Autovoice gen.  Youtube cont. use google cloud voice api

function ActionExplain(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>ActionExplain</div>
        {props.match.params.id}
      </section>
      <section>내용증명</section>
      <section>내용증명이란,</section>
    </div>
  );
}

export default ActionExplain;
