import React from "react";
import "../../assets/css/Form.css";
import { faEnvelope, faKey, faCalendarDay, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo-fix.png'
// import { InputField } from '../../components/common/Input/index.js'

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


  return (
    <React.Fragment>
      <div className="flex max-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-0 lg:w-[30%] lg:ml-[33.33%]  shadow-lg shadow-indigo-500/40">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href='/'><img
            className="mx-auto h-10 w-auto mt-2"
            src={logo}
            alt=""
          /></a>
          <h2 className=" m-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            SIGN UP
          </h2>
          <div className='flex justify-center'>
            {renderAlertMessage("summary")}</div>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                <FontAwesomeIcon icon={faUser} /> User name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  // required
                  placeholder='Username'
                  value={username}
                  onChange={handleChangeUsername}
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* <InputField
                id="username"
                name="username"
                type="text"
                // required
                placeholder='Username'
                value={username}
                className="text-[#f00]"
                onChange={handleChangeUsername}
              /> */}
              {renderAlertMessage("username")}
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                <FontAwesomeIcon icon={faEnvelope} /> Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  // required
                  placeholder='Email'
                  value={email}
                  onChange={handleChangeEmail}
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {renderAlertMessage("email")}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  <FontAwesomeIcon icon={faKey} /> Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  // id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={handleChangePassword}
                  // required
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {renderAlertMessage("password")}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  <FontAwesomeIcon icon={faKey} /> Comfirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  // id="password"
                  name="comfirmpassword"
                  type="password"
                  placeholder='Comfirm Password'
                  // value={password}
                  onChange={handleChangeConfirm}
                  // required
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {renderAlertMessage("comfirmpassword")}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  <FontAwesomeIcon icon={faCalendarDay} /> Birthday
                </label>
              </div>
              <div className="mt-2">
                <input
                  // id="password"
                  name="birthday"
                  type="date"
                  // value={password}
                  onChange={handleChangeBirthday}
                  // required
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {renderAlertMessage("birthday")}
              </div>
            </div>



            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account!ㅤ
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
