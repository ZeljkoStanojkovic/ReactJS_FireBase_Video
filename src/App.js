import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import firebase, { auth } from "./services/firebase";

import logo from "./logo.svg";
import "./App.scss";
import Play from "./play/play";

import Action from "./pages/Action"; //각 내용증명
import ActionBundle from "./pages/ActionBundle"; // 내용증명들
import ActionBundleList from "./pages/ActionBundleList";
import CaseList from "./pages/CaseList";
import EditDoc from "./pages/EditDoc";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Myaccount from "./pages/Myaccount";
import Qform from "./pages/Qform";
import ViewDoc from "./pages/ViewDoc";
import Visit from "./pages/Visit";
import Track from "./pages/Track";
import Opponent from "./pages/Opponent";
import ActionExplain from "./pages/ActionExplain";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import "./scss/main.scss";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("App -> user", user);
      setCurrentUser(user);
      setLoad(true);
    });
  });

  return (
    <div className="App">
      {
        !load && <Loading />
      }      
      <AuthContext.Provider value={{ currentUser: currentUser }}>
        <Layout>
          {!currentUser ? (
            <Switch>
              {/* <Route exact path="/action/:id" component={Action} /> */}
              {/* <Route
                exact
                path="/actionbundle/:actionbundleid"
                component={ActionBundle}
              /> */}
              {/* <Route
                exact
                path="/actionbundlelist/:caseid"
                component={ActionBundleList}
              /> */}

              {/* <Route exact path="/caselist" component={CaseList} /> */}
              {/* <Route exact path="/editdoc/:id" component={EditDoc} /> */}
              <Route exact path="/intro" component={Intro} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/myaccount" component={Myaccount} /> */}
              {/* <Route exact path="/qform" component={Qform} /> */}
              {/* <Route exact path="/viewdoc/:id" component={ViewDoc} /> */}
              {/* <Route exact path="/visit/:id" component={Visit} /> */}
              {/* <Route exact path="/track/:id" component={Track} /> */}
              <Route exact path="/opponent" component={Opponent} />
              {/* <Route
                exact
                path="/actionexplain/:id"
                component={ActionExplain}
              /> */}

              <Redirect from="/" to="/login" />

              {/* <Redirect from="/" to="/intro" /> */}
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/action/:id" component={Action} />
              <Route
                exact
                path="/actionbundle/:actionbundleid"
                component={ActionBundle}
              />
              <Route
                exact
                path="/actionbundlelist/:caseid"
                component={ActionBundleList}
              />

              <Route exact path="/caselist" component={CaseList} />
              <Route exact path="/editdoc/:id" component={EditDoc} />
              <Route exact path="/intro" component={Intro} />
              {/* <Route exact path="/login" component={Login} /> */}
              <Route exact path="/myaccount" component={Myaccount} />
              <Route exact path="/qform" component={Qform} />
              <Route exact path="/viewdoc/:id" component={ViewDoc} />
              <Route exact path="/visit/:id" component={Visit} />
              <Route exact path="/track/:id" component={Track} />
              <Route exact path="/opponent" component={Opponent} />
              <Route
                exact
                path="/actionexplain/:id"
                component={ActionExplain}
              />

              <Redirect from="/" to="/caselist" />

              {/* <Redirect from="/" to="/intro" /> */}
            </Switch>
          )}
        </Layout>
      </AuthContext.Provider>

      {/* <Play /> */}

      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
