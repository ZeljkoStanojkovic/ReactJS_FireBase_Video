import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function ActionBundle(props) {
  let history = useHistory();
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

  const test_data = [
    { actionid: 0, title: "발신(1차)", status: "2020-03-02 송달불능" },
    { actionid: 1, title: "발신(2차)", status: "2020-03-12 송달불능" },
    { actionid: 2, title: "수신(1차)", status: "2020-03-18 도달" },
  ];

  const clickHandler = (item) => {
    // alert(JSON.stringify(item));
    history.push("/action/" + item.actionid);
  };

  return (
    <div>
      <section>
        <div>ActionBundle</div>
        {props.match.params.actionbundleid}

        <div>
          {test_props_data.case.title} {test_props_data.case.amt}{" "}
          {test_props_data.case.o} {test_props_data.case.status}
        </div>
      </section>
      <br></br>
      <br></br>

      <section>내용증명들</section>

      <br></br>
      <br></br>
      <br></br>

      <div>
        {test_data &&
          test_data.map(function (item, idx) {
            return (
              <li key={idx} onClick={() => clickHandler(item)}>
                {item.title} {item.active} {item.status}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default ActionBundle;
