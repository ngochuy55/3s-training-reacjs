import React, { useState } from "react";

export default function Navigation({
  isLoggedin,
  logo,
  FontAwesomeIcon,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  handleSearchClick,
  handleSearch,
  setSearchValue,
  products,
  search,
}) {
  const [value, setValue] = useState("");
  return (
    <React.Fragment>
      <nav className="w-full bg-[#CD1818] text-white h-[56px] leading-[56px] fixed top-0 left-0 right-0 z-40">
        <div className="flex container items-center justify-between">
          <div className="w-[50px] h-[50px]">
            <a href="/">
              <img src={logo} alt="" className="h-full" />
            </a>
          </div>
          <form className="w-[496px] flex">
            <input
              type="text"
              className="h-[38px] w-full pl-4 outline-none text-[#000]"
              placeholder="Nhập tên điện thoại cần tìm"
              value={search}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              className="w-[58px] h-[38px] flex items-center justify-center bg-[#333]"
              onClick={(e) => {
                e.preventDefault();
                handleSearchClick();
              }}
              type="submit"
            >
              <FontAwesomeIcon
                className="search_icon"
                icon={faMagnifyingGlass}
              />
            </button>
            {/* <div>
              {products.map((product) => {
                return <div>{product}</div>;
              })}
            </div> */}
          </form>
          <div className="relative">
            <FontAwesomeIcon className="text-[20px]" icon={faCartShopping} />
            <br />
            <span className="absolute w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 -right-3">
              0
            </span>
          </div>
          <FontAwesomeIcon className="hidden" icon={faBars} />
          <div>
            {isLoggedin ? (
              <React.Fragment>
                <div className="dropdown">
                  <p
                    className="dropdown-toggle m-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome: {JSON.parse(localStorage.getItem("user")).fullName}{" "}
                    !
                  </p>
                  <ul className="dropdown-menu dropdown-menu-right transform transition duration-500 scale-0 translate-y-2">
                    <li>
                      <a className="dropdown-item" href="/">
                        Thông tin cá nhân
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/logout">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
            ) : (
              <ul className="flex m-0">
                <li className="mr-3">
                  <a className="nav-link text-white" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/register">
                    Sign Up
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
