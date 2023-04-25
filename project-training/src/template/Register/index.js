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
      <div className="flex absolute h-[480px] w-[776px] top-[20%] left-[25%] rounded-[10px] box-shadow" id="container">
        <div className="text-center w-[50%]">
          <form className="bg-[#fff] flex items-center justify-center flex-col px-[50px] h-full text-center">
            <div className=" text-[#7f7f7f] m-0 font-bold">
              <h3>Create Account</h3>
              {renderAlertMessage("summary")}
            </div>

            <div className="mb-[15px] h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[12px]'
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={username}
                onChange={handleChangeUsername}
              />
              {renderAlertMessage("fullname")}
            </div>

            <div className="mb-[15px] h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'

                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
              {renderAlertMessage("email")}
            </div>

            <div className="mb-[15px] h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              {renderAlertMessage("password")}
            </div>

            <div className="mb-[15px] h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'
                type="password"
                name="comfirmpassword"
                placeholder="Comfirm Password"
                onChange={handleChangeConfirm}
              />
              {renderAlertMessage("confirm")}
            </div>
            <div className="mb-[15px] h-[5rem] w-[100%]">
              <input
                className='bg-[#eee] w-full px-[12px] py-[15px]'
                name="birthday"
                type="date"
                onChange={handleChangeBirthday}
              />
            </div>

            <button className="bg-[#2b86ff] mb-[6px] text-white rounded-[20px] font-bold px-[12px] py-[15px] border-[1px] text-[12px] uppercase w-2/5 " onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="bg-[#41ffe6] absolute flex items-center justify-center flex-col px-[40px] text-center top-0 h-[100%] w-[50%]">
            <div className="text-center items-center">
              <img src={logo} alt="" className='mx-[40%] mb-5' />
              <h1 className='my-[20%]'>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='w-[80%]'>
                <a href="/login" className="bg-[#2b86ff] border-2 border-white border-solid  text-white no-underline rounded-[20px] font-bold px-[12px] py-[15px] text-[12px] uppercase " id="signIn">
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
