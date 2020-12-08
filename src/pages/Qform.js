import React, { useContext } from "react";
import Qinput from "../components/Qinput";
import AuthContext from "../context/AuthContext";
import q from "../data/q.json";

function Qform(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>Qform</div>
        {/* {JSON.stringify(q[0])} */}
      </section>

      <section>
        <Qinput q={q[0]} />
      </section>
    </div>
  );
}

export default Qform;
