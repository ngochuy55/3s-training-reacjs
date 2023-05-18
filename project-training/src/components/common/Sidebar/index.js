import { faCartShopping, faHouse, faKey, faRightFromBracket, faRightToBracket, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Sidebar({
  showBars,
  logo,
  isLoggedin,
  handleshowinfo,
  handleShowCart,
  cartItems,
  handleShowChangePass
}) {
  return (
    <React.Fragment>
      <div
        className={`${showBars ? "animate-slide-right" : "animate-slide-left"
          } 
   bg-white w-full sm:w-[300px] sm:max-w-[100%] md:w-[300px] lg:hidden 
    shadow-xl fixed top-[55px] right-0 h-full max-w-full transition-all duration-300 z-40`}
      >
        <div className="flex flex-col h-full p-3 w-full bg-gray-900 text-gray-100">
          <div className="space-y-3 h-3/5 relative">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] ">
                <a href="/">
                  <img src={logo} alt="" className="h-full" />
                </a>
              </div>
              <h2>3S Shop</h2>
            </div>

            <div className="flex-1 ">
              <ul className="pt-2 pb-4 space-y-1 text-sm ">
                <li className="rounded-sm">
                  <a
                    href="/"
                    className="no-underline text-white flex items-center p-2 space-x-3 rounded-md"
                  >
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{ color: "#ffffff" }}
                    />
                    <span>Home</span>
                  </a>
                </li>
                {isLoggedin ? (
                  <React.Fragment>
                    <li className="rounded-sm">
                      <button
                        className="flex items-center  p-2 space-x-3 rounded-md"
                        onClick={handleshowinfo}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#ffffff" }}
                        />
                        <span>Thông tin cá nhân</span>
                      </button>
                    </li>
                    <li className="rounded-sm">
                      <button
                        className="flex items-center  p-2 space-x-3 rounded-md"
                        onClick={handleShowCart}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          style={{ color: "#ffffff" }}
                        />
                        <span>Giỏ hàng ({`${cartItems.length}`})</span>
                      </button>
                    </li>
                    <li className="rounded-sm">
                      <button
                        className="flex items-center  p-2 space-x-3 rounded-md"
                        onClick={handleShowChangePass}
                      >
                        <FontAwesomeIcon
                          icon={faKey}
                          style={{ style: "#ffffff" }}
                        />
                        <span>Đổi mật khẩu</span>
                      </button>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="/logout"
                        className="flex no-underline text-white items-center p-2 space-x-3 rounded-md"
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          style={{ color: "#ffffff" }}
                        />
                        <span>Logout</span>
                      </a>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li className="rounded-sm">
                      <a
                        href="/login"
                        className="flex no-underline text-white items-center p-2 space-x-3 rounded-md"
                      >
                        <FontAwesomeIcon
                          icon={faRightToBracket}
                          style={{ color: "#ffffff" }}
                        />
                        <span>Login</span>
                      </a>
                    </li>
                    <li className="rounded-sm">
                      <a
                        href="/register"
                        className="flex no-underline text-white items-center p-2 space-x-3 rounded-md"
                      >
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          style={{ color: "#ffffff" }}
                        />
                        <span>Signup</span>
                      </a>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </div>
          {isLoggedin && (
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end absolute bottom-0 h-2/5">
              <img
                src={JSON.parse(localStorage.getItem("user"))?.avatar}
                alt=""
                className="w-12 h-12 rounded-lg dark:bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {JSON.parse(localStorage.getItem("user"))?.fullName}{" "}
                </h2>
                <span className="flex items-center space-x-1">
                  <button
                    className="text-xs hover:underline dark:text-gray-400"
                    onClick={handleshowinfo}
                  >
                    View profile
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}