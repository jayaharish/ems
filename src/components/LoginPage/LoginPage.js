import React from "react";
import "./LoginPage.css";
import Human from "./Human.js";
import Scrible from "./Scrible.js";
import Objects from "./Objects.js";

function LoginPage(props) {
  const changePage = () => {
    var welcome = document.getElementsByClassName("welcome")[0];
    var welcomeBack = document.getElementsByClassName("welcome-back")[0];
    var welcomeDetails = document.getElementsByClassName("welcome-details")[0];
    welcome.style.width = "30%";
    welcome.style.left = "70%";
    welcomeBack.style.transform = "translateX(0)";
    welcomeBack.style.width = "100%";
    welcomeDetails.style.width = "0";
  };

  return (
    <div className="login_page">
      <svg className="cls-1" viewBox="0 0 626 619.38">
        <path d="M0,309.69c0,171,140.13,309.69,313,309.69S626,480.73,626,309.69,485.87,0,313,0,0,138.65,0,309.69M226.45,486.26c-65.56-32.15-110.63-99-110.63-176.36,0-108.68,89-196.74,198.84-196.74S513.5,201.25,513.5,309.91s-89,196.72-198.84,196.72a199.75,199.75,0,0,1-88.21-20.37" />
      </svg>
      <svg className="cls-2" viewBox="0 0 477.54 395.53">
        <path
          d="M1077.89,249.42l-267,41.43c-49.94,7.74-84.08,54.08-76.25,103.49h0l27.41,172.94c7.83,49.41,54.66,83.19,104.6,75.45h0l267-41.43c49.95-7.73,84.1-54.06,76.29-103.47v0l-27.41-172.94c-7.82-49.42-54.65-83.2-104.59-75.45Zm36.6,198.88c7.84,49.41-26.3,95.75-76.24,103.5h0l-95.9,14.84c-49.94,7.75-96.77-26-104.6-75.43h0l-6.1-38.51c-7.83-49.41,26.3-95.75,76.24-103.5h0l95.9-14.85c49.94-7.75,96.78,26,104.61,75.44h0Z"
          transform="translate(-733.52 -248.31)"
        />
      </svg>
      <div className="container">
        <div className="sign-in">
          <div className="card">
            <div className="title">ADMIN</div>
            <label>Email</label>
            <input />
            <label>Password</label>
            <input />
            <button>Sign in</button>
          </div>
        </div>
        <div className="welcome">
          <div className="welcome-back">
            <div className="title">Hello</div>
            <div className="description">
              Sign in to view employee details, work flow, and to manage
              projects
            </div>
            <div className="svg-holder">
              <Objects />
            </div>
          </div>
          <div className="welcome-details">
            <div className="human_container">
              <Human />
            </div>
            <Scrible />
            <div className="welcome-details-text">
              <div className="text-1">WELCOME BACK</div>
              <div className="text-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pretium egestas felis nec accumsan. Vivamus ut
                hendrerit augue.
              </div>
              <button onClick={changePage}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
