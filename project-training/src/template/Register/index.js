import React from "react";
import "../../assets/css/Form.css";
// import { Navbar } from "../../components/common/Navigation";
export function Register({
  renderAlertMessage,
  username,
  handleChangeUsername,
  email,
  handleChangeEmail,
  password,
  handleChangePassword,
  handleChangeConfirm,
  handleChangeBirthday,
  handleSubmit,
}) {
  const logo = require("../../assets/images/logo-fix.png");

  return (
    <React.Fragment>
      <div className="container" id="container">
        <div className="form-container sign-in-container ">
          <form className="form">
            <div className="input-form">
              <h3>Create Account</h3>

              {renderAlertMessage("summary")}
            </div>

            <div className="input-form">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={username}
                onChange={handleChangeUsername}
              />
              {renderAlertMessage("username")}
            </div>

            <div className="input-form">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />

              {renderAlertMessage("email")}
            </div>

            <div className="input-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {renderAlertMessage("password")}
            </div>

            <div className="input-form">
              <input
                type="password"
                name="comfirmpassword"
                placeholder="Comfirm Password"
                onChange={handleChangeConfirm}
              />
              {renderAlertMessage("confirm")}
            </div>
            <div className="input-form">
              <input
                name="birthday"
                type="date"
                onChange={handleChangeBirthday}
              />
            </div>

            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img src={logo} />
              <h1 className="welcome_text">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button>
                <a href="/login" className="ghost" id="signIn">
                  Sign In
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
