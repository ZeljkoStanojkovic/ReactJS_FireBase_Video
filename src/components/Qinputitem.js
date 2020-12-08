import q from "../data/q.json";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Qinputitem = (props) => {
  //{"z":"CHOOSE_1","q":"어떤 문제입니까?","a":["대여금","매매대금","손해배상","용역대금"]}
  const onClickHandler = (value, index) => {
    console.log("onClickHandler -> index", index);
    console.log("onClickHandler -> value", value);
    props.parentCallback(value, index);
    // console.log("onClickHandler -> event", event.target.value);
    // event.preventDefault();
  };

  switch (props.item.z) {
    case "CHOOSE_1":
      return (
        <div className="test-border">
          <h1>{props.item.q}</h1>
          <ul>
            {props.item.a.map((value, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => onClickHandler(value, props.itemindex)}
                  >
                    {value}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
      break;
    case "INPUT_MONEY_AMT":
      return (
        <div className="test-border">
          <h1>{props.item.q}</h1>
          <input type="currency" placeholder="금액을 입력하세요" />
        </div>
      );
      break;
    case "INPUT_DATE":
      return (
        <div className="test-border">
          <h1>{props.item.q}</h1>
          <input type="date" name="날짜를 입력하세요" />
        </div>
      );
      break;

    case "INPUT_YEARMONTH_RATE":
      return (
        <div className="test-border">
          <h1>{props.item.q}</h1>
          <select name="yearmonth" id="yearmonth">
            <option value="연이율">연이율</option>
            <option value="월이율">월이율</option>
          </select>
          <input type="number" step="0.001" min="0" />
        </div>
      );
      break;

    default:
      return null;
  }
};

export default Qinputitem;
