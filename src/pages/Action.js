import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom"; // to see sent doc

function Action(props) {
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
      <section>
        <div>Action</div>
        <div>
          {test_props_data.case.title} {test_props_data.case.amt}{" "}
          {test_props_data.case.o} {test_props_data.case.status}
        </div>
      </section>
      <br></br>
      <br></br>

      <section>내용증명</section>
      {props.match.params.id}

      <br></br>
      <br></br>
      <br></br>

      <section> 초안작성 2020-10-10</section>

      <section> 접수 2020-10-10</section>
      <section>송달 중..</section>
    </div>
  );
}

export default Action;
