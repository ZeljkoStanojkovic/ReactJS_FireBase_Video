import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Visit(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  return (
    <div>
      <section>
        <div>Visit</div>
      </section>
      {props.match.params.id}

      <section>설명 - 왜 관할인지 짧게 </section>

      <section>지도, 주소, 링크 </section>

      <section>내부 사진 민원실까지 </section>

      <section>무엇을 하는지</section>
    </div>
  );
}

export default Visit;
