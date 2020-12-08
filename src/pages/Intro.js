import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Intro(props) {
  let history = useHistory();
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  function startHandler(currentUser) {
    if (currentUser) {
      history.push("/caselist");
    } else {
      history.push("/login");
    }
  }

  return (
    <div>
      <section className="test-border">
        <div>작으니 넘어갈까..</div>
        <div>작지만 해봅시다!</div>

        <button onClick={startHandler}>시작</button>
      </section>

      <section>
        <div className="test-border--green">copyright</div>
      </section>
    </div>
  );
}

export default Intro;
