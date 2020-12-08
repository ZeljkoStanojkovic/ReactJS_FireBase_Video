import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function EditDoc(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>EditDoc</div>
        {props.match.params.id}
      </section>

      <section></section>
    </div>
  );
}

export default EditDoc;
//https://github.com/webodf/WebODF
