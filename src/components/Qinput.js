import qjson from "../data/q.json";
import React, { useContext, useState } from "react";
import CaseQAContext from "../context/CaseQAContext";
import Qinputitem from "./Qinputitem";
const Qinput = (props) => {
  function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        (areObjects && !deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }

    return true;
  }

  function isObject(object) {
    return object != null && typeof object === "object";
  }

  const context = useContext(CaseQAContext);
  const QidAndAnswersStack = context.QidAndAnswersStack;
  const QidAndAnswersStackToComparePrev =
    context.QidAndAnswersStackToComparePrev;
  const [q, setQ] = useState(props.q);
  const [msg, setMsg] = useState("..");

  //   console.log("Qinput -> props", q);
  //{"id":0,"prev":null,"items":[{"z":"CHOOSE_1","q":"어떤 문제입니까?","a":["대여금","매매대금","손해배상","용역대금"]}]}

  var answersForThisQ = new Array(q.items.length);
  const handleCallback = (value, itemindex, done) => {
    answersForThisQ[itemindex] = value;
    //TODO:
    //선택하면 바로 다음으로 넘어간다.
  };

  const setNextQ = (event) => {
    console.log(
      "[before] setNextQ -> answersStack, comparing with prevs... ",
      QidAndAnswersStack
    );
    if (answersForThisQ && answersForThisQ.length === 1) {
      //   let copyOfaStack = aStack.slice();

      QidAndAnswersStack.push({ id: q.id, a: answersForThisQ[0] });
      console.log(
        "[after] setNextQ -> QidAndAnswersStack, comparing with prevs... ",
        QidAndAnswersStack
      );

      QidAndAnswersStackToComparePrev.push({ id: q.id, a: answersForThisQ[0] });
      console.log(
        "[after] setNextQ -> QidAndAnswersStack, comparing with prevs... ",
        QidAndAnswersStackToComparePrev
      );
    } else {
      QidAndAnswersStack.push({ id: q.id, a: answersForThisQ });
      console.log(
        "[after] setNextQ -> QidAndAnswersStack, comparing with prevs... ",
        QidAndAnswersStack
      );

      QidAndAnswersStackToComparePrev.push({ id: q.id, a: "any" });
      console.log(
        "[after] setNextQ -> QidAndAnswersStack, comparing with prevs... ",
        QidAndAnswersStackToComparePrev
      );
    }
    var minusIdItems = [];
    JSON.parse(JSON.stringify(qjson)).forEach((nextQ) => {
      console.log("setNextQ -> nextQ.prevQ", nextQ.prev);
      //   if (nextQ.id < 0) {
      //     minusIdItems.push(nextQ);
      //   }
      if (
        nextQ.prev &&
        deepEqual(nextQ.prev, QidAndAnswersStackToComparePrev)
      ) {
        //"prev": [{ "id": 0, "a": "대여금" }],
        console.log(nextQ);
        setQ(nextQ);
      }
      //   else {
      //     setMsg("매칭되는 다음 json item 없음");
      //     setQ(minusIdItems[0]);
      //   }
    });
  };
  return (
    <div className="test-border--blue">
      <CaseQAContext.Provider
        value={{
          QidAndAnswersStack: [],
          QidAndAnswersStackToComparePrev: [],
        }}
      >
        <div> :: {JSON.stringify(QidAndAnswersStack)}</div>
        <div>{msg}</div>
        <ul>
          {q.items.map((item, index) => {
            return (
              <li key={index}>
                <Qinputitem
                  item={item}
                  itemindex={index}
                  parentCallback={handleCallback}
                />
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={setNextQ}>다음</button>
        </div>
      </CaseQAContext.Provider>
    </div>
  );
};

export default Qinput;
