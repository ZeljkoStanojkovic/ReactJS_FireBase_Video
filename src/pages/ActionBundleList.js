import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function ActionBundleList(props) {
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
    { title: "내용증명", active: true, status: "내용증명 초안 저장됨" },
    {
      title: "독촉절차(지급명령신청)",
      active: true,
      status: "사건번호 부여됨",
    },
    { title: "소액사건심판청구", active: false },
    { title: "조정신청", active: false },
  ];
  const clickHandler = (item) => {
    // alert(JSON.stringify(item));
    history.push("/actionbundle/" + item.title);
  };
  return (
    <div>
      <section>
        <div>ActionBundleList</div>
        {props.match.params.caseid}

        <div>
          {test_props_data.case.title} {test_props_data.case.amt}{" "}
          {test_props_data.case.o} {test_props_data.case.status}
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
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
      </section>
    </div>
  );
}

export default ActionBundleList;
