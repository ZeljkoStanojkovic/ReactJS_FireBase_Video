//elements : 법률, 계약, 사실, 증거

import React, { useContext } from "react";
import { useHistory } from "react-router-dom"; // to see sent doc

function EForm(props) {
  let history = useHistory(); //TODO:이미 보낸 문서 보기

  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const test_props_data = {
    case: {
      id: "323r23",
      title: "대여금",
      amt: 200000,
      o: "이종찬",
    },
  };
  return (
    <div>
      <form>
        <h1></h1>
        <label for="textinput">labeltext</label>
        <input type="text" id="textinput" name="textinput" />
      </form>
    </div>
  );
}

export default EForm;
