import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import TrackPost from "../components/TrackPost";

function Track(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  //TODO:
  //우체국, 법원 스크래이퍼

  return (
    <div>
      <section>
        <div>Track</div>
        {props.match.params.id}
      </section>
      <div>===</div>

      <TrackPost id={props.match.params.id} />
    </div>
  );
}

export default Track;
