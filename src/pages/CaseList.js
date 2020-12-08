import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";

function CaseList(props) {
  let history = useHistory();
  const [cases, setCases] = useState(null);
  const [querySnapshot, setQuerySnapshot] = useState(null);
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  // const test_data = [
  //   {
  //     id: "323r23",
  //     title: "대여금",
  //     amt: 200000,
  //     o: "이종찬",
  //     status: "내용증명 저장됨",
  //   },
  //   {
  //     id: "311r23",
  //     title: "대여금",
  //     amt: 260000,
  //     o: "이종배",
  //     status: "내용증명 발송됨",
  //   },
  //   {
  //     id: "311r25",
  //     title: "매매대금",
  //     amt: 160000,
  //     o: "이종배",
  //     status: "소액심판청구서 저장됨",
  //   },
  // ];

  const test_data = null;
  useEffect(() => {
    ///indivisual_data/cases/
    const currentUserCasesCollection = firebase
      .firestore()
      .collection("indivisual_data")
      .doc("cases")
      .collection(currentUser.uid);
    var _cases = [];
    currentUserCasesCollection.get().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        _cases.push(Object.assign({ id: doc.id }, doc.data()));
      });
      // setCases(_cases);
    }); //get all docs
  });
  // const test_data = null;
  const clickHandler = (item) => {
    // alert(JSON.stringify(item));
    history.push("/actionbundlelist/" + item.id);
  };

  const newCaseHandler = () => {
    //TODO:modal
  };

  return (
    <div>
      <div className="fixed--bottom btn--bar " onClick={newCaseHandler}>
        새로운 사건 추가
      </div>
      {!test_data && (
        <div>
          <div className="test-border items-center--vert"></div>
        </div>
      )}
      {test_data && (
        <div>
          <div className="fixed--bottom btn--bar"> 새로운 사건 추가</div>
          <section>
            <div>CaseList</div>
            <div>{JSON.stringify(cases)}</div>
            <ul>
              {test_data &&
                test_data.map((item, index) => (
                  <li key={index} onClick={() => clickHandler(item)}>
                    {item.title} {item.amt}, {item.o}, {item.status}
                  </li>
                ))}
            </ul>
          </section>

          <section>
            {/* TODO: 둘 중 하나만 보여 준다 */}
            {test_data && test_data.length > 0 && (
              <div>
                <h2>{test_data.length} 개의 사건들</h2>
                <button>사건 추가하기</button>
              </div>
            )}

            {!test_data && <button>처음 시작하기</button>}
          </section>
        </div>
      )}
    </div>
  );
}

export default CaseList;
