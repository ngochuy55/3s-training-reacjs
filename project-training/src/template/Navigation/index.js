import {
  faX,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Cart } from "../../components/common/Cart";
import { Sidebar } from "../../components/common/Sidebar";
import { Information } from "../../components/common/Infomation";
import { ChangePassword } from "../../components/common/ChangePassForm";

export default function Navigation({
  isLoggedin,
  logo,
  FontAwesomeIcon,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  handleSearchClick,
  setSearchValue,
  search,
  total,
  handleShowCart,
  showCart,
  cartItems,
  handleDeleteProduct,
  handleShowSidebar,
  showBars,
  isproductDetail,
  handleshowinfo,
  showInfor,
  user,
  showPass,
  handleShowChangePass,

  submiteditinfo,
  handleInputname,
  handleInputemail,
  renderAlertMessage,
  handleInputPasswordOld,
  handleInputPasswordNew,
  handleInputConfirmPasswordNew,
  changePassword,
  handleInputBirthday,
  handleClearSearch,
  handlePreviewAvatar,
  avatar
}) {
  return (
    <React.Fragment>
      <nav className="flex w-full bg-[#CD1818] text-white h-[56px] leading-[56px] fixed top-0 left-0 right-0 z-40">
        <div className="flex lg:px-[10rem] w-full relative lg:mx-auto items-center justify-between">
          <div className="hidden sm:hidden md:flex md:ml-2 w-[50px] h-[50px]">
            <a href="/">
              <img src={logo} alt="Logo" className="h-full" />
            </a>
          </div>

          <form className="w-[80%] ml-1 sm:ml-2 md:w-[496px] flex">
            <div className="flex bg-white h-[38px] min-w-[220px] lg:w-[360px] justify-between">
              <input
                type="text"
                className={`${isproductDetail ? "hidden" : "flex -[496px]"} h-[38px] w-full pl-4 outline-none text-[#000]`}
                placeholder="Nhập tên điện thoại cần tìm"
                value={search}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {search !== "" && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClearSearch();
                  }}
                >
                  <span
                    className="text-black h-[38px] items-center flex  mr-[13px] text-[11px]"
                    icon="icon-cance"
                    id="icon-cance"
                  >
                    <FontAwesomeIcon icon={faX} />
                  </span>
                </button>
              )}
            </div>

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
          </form>


          <div className="absolute left-[90%] lg:hidden">
            <FontAwesomeIcon icon={faBars} onClick={handleShowSidebar} />
          </div>
          <div className="flex">
            <div className="hidden  lg:flex xl:right-[-6rem] 2xl:-right-30">
              <button onClick={handleShowCart}>
                <FontAwesomeIcon
                  className="text-[20px] "
                  icon={faCartShopping}
                />
              </button>
              <br />
              <span className="relative w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 right-1">
                {cartItems.length}
              </span>
            </div>
            {isLoggedin ? (
              <React.Fragment>


                <div className="dropdown lg:flex hidden">
                  <p
                    className="dropdown-toggle m-0 flex items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={user?.avatar} alt="" className="rounded-[50%] w-10 h-10" />

                  </p>
                  <ul className="dropdown-menu dropdown-menu-right transform transition duration-500 scale-0 translate-y-2">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleshowinfo}
                      >
                        Thông tin cá nhân
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleShowChangePass}
                      >
                        Thay đổi mật khẩu
                      </button>
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
              <ul className="hidden lg:flex m-0">
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
      {/* GIỎ HÀNG */}
      {showCart && (
        <Cart
          showCart={showCart}
          handleShowCart={handleShowCart}
          cartItems={cartItems}
          handleDeleteProduct={handleDeleteProduct}
          total={total}
        />
      )}
      {/* SHOW BAR WHEN RESPONSIVE */}
      {showBars && (
        <Sidebar
          showBars={showBars}
          logo={logo}
          isLoggedin={isLoggedin}
          handleshowinfo={handleshowinfo}
          handleShowCart={handleShowCart}
          cartItems={cartItems}
          handleShowChangePass={handleShowChangePass}
        />
      )}
      {/*END SHOW BAR WHEN RESPONSIVE */}

      {/* POPUP INFOMATION */}
      {showInfor && (
        <Information
          user={user}
          handleInputname={handleInputname}
          handleInputemail={handleInputemail}
          renderAlertMessage={renderAlertMessage}
          handleInputBirthday={handleInputBirthday}
          submiteditinfo={submiteditinfo}
          handleshowinfo={handleshowinfo}
          handlePreviewAvatar={handlePreviewAvatar}
          avatar={avatar}
        />
      )}
      {/* END POPUP INFOMATION */}

      {/* POPUP CHANGE PASSWORD */}
      {showPass && (
        <ChangePassword
          handleShowChangePass={handleShowChangePass}
          changePassword={changePassword}
          renderAlertMessage={renderAlertMessage}
          handleInputPasswordNew={handleInputPasswordNew}
          handleInputConfirmPasswordNew={handleInputConfirmPasswordNew}
          handleInputPasswordOld={handleInputPasswordOld} />
      )}
    </React.Fragment>
  );
}
