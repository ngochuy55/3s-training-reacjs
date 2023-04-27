import React from 'react';
import '../../assets/css/Form.css'
// import { Navbar } from '../../components/common/Navigation';
// import { Register } from '../Register';

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
      <div className="flex absolute h-[480px] w-[776px] top-[20%] left-[25%] rounded-[10px] box-shadow" id="container">
        <div className="text-center w-[50%]">
          <form className="bg-[#fff] flex items-center justify-center flex-col px-[50px] h-full text-center">
            <div className="py-4 text-[#7f7f7f] m-0 font-bold">
              <h3>Sign in</h3>
              {renderAlertMessage("summary")}
            </div>

            <div className="mb-3 h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'
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

            <div className="mb-3 h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'
                type="password"
                id='pass'
                name='pass'
                placeholder='Password'
                value={password}
                onChange={handleChangePassword}
              />
              {renderAlertMessage("password")}
            </div>
            <button className='bg-[#2b86ff] text-white rounded-[20px] font-bold px-[12px] py-[15px] border-[1px] text-[12px] uppercase w-2/5 ' onClick={handleSubmit}>Sign In</button>
          </form>
        </div>

        <div>
          <div className="bg-[#41ffe6] absolute flex items-center justify-center flex-col px-[40px] text-center top-0 h-[100%] w-[50%]">
            <div className="text-center items-center">
              <a href='/'><img src={logo} alt='' className='mx-[40%] mb-5' /></a>
              <h1 className='my-[20%]'>Don't have Account ?</h1>
              <button className='w-[80%]'><a href='/register' className="bg-[#2b86ff] border-2 border-white border-solid  text-white no-underline rounded-[20px] font-bold px-[12px] py-[15px] text-[12px] uppercase " id="signUp">Sign Up</a></button>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

