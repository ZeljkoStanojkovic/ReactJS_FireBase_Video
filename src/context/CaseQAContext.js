import React from "react";
const CaseQAContext = React.createContext({
  QidAndAnswersStack: [],
  QidAndAnswersStackToComparePrev: [],
});
export default CaseQAContext;
