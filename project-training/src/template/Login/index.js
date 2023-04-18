import React from 'react';
import '../../assets/css/Form.css'
import { Navbar } from '../../components/common/Navigation';
import { Register } from '../Register';

export function Login({
  handleChangeEmail,
  renderAlertMessage,
  handleChangePassword,
  handleSubmit,
  email,
  password
}
) {
  const logo = require('../../assets/images/logo-fix.png')

  return (
    <React.Fragment>
      <div className="container" id="container">
        <div className="form-container sign-in-container">

          <form className='form'>
            <div className='input-form'>
              <h1>Sign in</h1>
              {renderAlertMessage("summary")}
            </div>

            <div className='input-form'>
              <input
                id='email'
                name='email'
                autoComplete="off"
                type="text"
                placeholder='Email'
                value={email}
                onChange={handleChangeEmail}
              />
              {renderAlertMessage("email")}
            </div>

            <div className='input-form'>
              <input
                type="password"
                id='pass'
                name='pass'
                placeholder='Password'
                value={password}
                onChange={handleChangePassword}
              />
              {renderAlertMessage("password")}
            </div>
            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>



        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img src={logo} />
              <h1 className='welcome_text'>Don't have Account ?</h1>
              <button><a href='/register' className="ghost" id="signUp">Sign Up</a></button>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

