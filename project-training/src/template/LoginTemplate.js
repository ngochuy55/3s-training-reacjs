import React from "react";
import Navbar from "../components/common/Navbar";
import '../assets/css/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


export default function LoginTemplate({
  email,
  password,
  handleSubmit,
  renderAlertMessage,
  onChangeEmail,
  onChangePassword,
}
) {
  return (
    <>
      <Navbar />
      <section>
        <div className="form-box">
          <div className="form-value">
            <form method="post">
              <h2>Login</h2>
              <div className="sum-error">{renderAlertMessage("summary")}</div>
              <div className="inputbox">
                <input
                  autoComplete="off"
                  required
                  id='email'
                  name='email'
                  type='text'
                  value={email}
                  onChange={onChangeEmail}
                />
                <div className="input-error">
                  {renderAlertMessage("email")}
                </div>

                <label htmlFor=""><FontAwesomeIcon icon={faEnvelope} className="input-icon" /> Email</label>
              </div>
              <div className="inputbox">
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={onChangePassword}
                  required />
                <div className="input-error">
                  {renderAlertMessage("password")}
                </div>
                <label htmlFor=""><FontAwesomeIcon icon={faKey} className="input-icon" /> Password  </label>

              </div>

              <button
                className="form-button"
                type='button'
                onClick={handleSubmit}>Log in</button>
              <div className="register">
                <p>Don't have a account ? <a href='/register'>Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}