import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Opponent(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>Opponent</div>
      </section>

      <section>
        ###님과 000님 사이의 대여금 문제에 대해 ###님이 이미 유료 서비스를 사용
        중입니다.{" "}
      </section>
      <section>
        따라서 죄송하오나 000님의 서비스 이용을 받을 수 없습니다.{" "}
      </section>
      <section> 너그러운 양해 부탁드립니다. </section>
    </div>
  );
}

export default Opponent;
