//google account loginimport React, { useContext } from "react";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../services/firebase";
import glogo from "../assets/svg/googlelogo.svg";
import ReactPlayer from 'react-player';
import videoFile from '../assets/mp4/RunningMan.mp4';
function Login(props) {
  //TODO:
  //[_]Redirects if already loged-in.

  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  return (
    <div>
      {currentUser && <div>Loading...</div>}
      {!currentUser && (
        <div>
          <div style={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <ReactPlayer url={videoFile} loop={true} playing muted config={{ file: { attributes: { autoPlay: true, muted: true }}}}/>
          </div>
          <section>
            <div>Login</div>

            <button onClick={signInWithGoogle} className={"loginBtn"}>
              <img src={glogo} className="glogo" />{" "}
              <span>Sign in with Google</span>
            </button>
          </section>

          <section></section>
        </div>
      )}
    </div>
  );
}

export default Login;
