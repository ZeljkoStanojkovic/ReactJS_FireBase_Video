import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { parseString } from "xml2js";
import axios from "axios";
//fs can be used in node environment, not in client react app.
//import { readFile } from "fs";
import postOfficeTracker from "../data/postofficeTrack.xml";
import postofficeTrackError from "../data/postofficeTrackError.xml";

function TrackPost(props) {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;

  axios
    .get(postOfficeTracker, {
      "Content-Type": "application/xml; charset=utf-8",
    })
    .then((response) => {
      parseString(response.data, function (err, result) {
        console.log("XML Data of postOfficeTracker file", result);
      });
    });

  return (
    <div>
      <section>
        <div>TrackPost</div>
      </section>
      {props.id}

      <section>내용증명 현재상태 </section>
      <section>2020-03-11 접수</section>
      <section>2020-03-13 발송</section>
      {/* {txt} */}
    </div>
  );
}

export default TrackPost;
