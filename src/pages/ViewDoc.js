import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function ViewDoc(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>ViewDoc</div>
        {props.match.params.id}
      </section>

      <section>{props.match.params.id}</section>
    </div>
  );
}

export default ViewDoc;
