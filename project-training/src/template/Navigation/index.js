import { faHouse, faRightFromBracket, faRightToBracket, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

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
  isProductDetailPage
}) {
  return (
    <React.Fragment>
      <nav className="flex w-full bg-[#CD1818] text-white h-[56px] leading-[56px] fixed top-0 left-0 right-0 z-40">
        <div className="flex conatainer w-full relative lg:max-w-[1024px] 2xl:w-[80%] lg:mx-auto items-center justify-between">
          <div className="hidden sm:hidden md:flex md:ml-2 w-[50px] h-[50px]">
            <a href="/">
              <img src={logo} alt="" className="h-full" />
            </a>
          </div>
          {isProductDetailPage ? null : (
            <form className="w-[80%] ml-1 sm:ml-2 md:w-[496px] flex">
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
            </form>
          )}
          <div className="hidden  lg:flex xl:right-[-6rem] 2xl:-right-30">
            <button onClick={handleShowCart}><FontAwesomeIcon className="text-[20px] " icon={faCartShopping} /></button>
            <br />
            <span className="relative w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 right-1">
              {cartItems.length}
            </span>
          </div>
          <div className="absolute left-[90%] lg:hidden">
            <FontAwesomeIcon icon={faBars} onClick={handleShowSidebar} />
          </div>
          <div>
            {isLoggedin ? (
              <React.Fragment>
                <div className="dropdown lg:flex hidden">
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
                      <button className="dropdown-item" onClick={handleshowinfo}>
                        Thông tin cá nhân
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
      {showCart ? (
        <React.Fragment>
          <nav className='w-full bg-[#CD1818] text-white h-[56px] leading-[56px] fixed top-0 left-0 right-0 z-4000'>
            <div className='flex container items-center justify-between'>
              <div className='w-[50px] h-[50px]'>
                <a href='/'><img src={logo} alt='' className='h-full' /></a>
              </div>
              <form className={`${isproductDetail ? 'hidden' : 'flex -[496px]'} `}>
                <input type='text' className='h-[38px] w-full pl-4 outline-none text-[#000]' placeholder='Nhập tên điện thoại cần tìm' />
                <span className='w-[58px] h-[38px] flex items-center justify-center bg-[#333]'><FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} /></span>
              </form>
              <div className="relative">
                <button>
                  <FontAwesomeIcon
                    className="text-[20px]"
                    icon={faCartShopping}
                    onClick={handleShowCart}
                  />
                  <br />
                </button>
                <span className="absolute w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 -right-3">
                  {`${cartItems.length}`}
                </span>
              </div>

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
                        Welcome:{" "}
                        {JSON.parse(localStorage.getItem("user")).fullName} !
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

          {showCart ? (
            <React.Fragment>
              <div className={`${showCart ? 'animate-slide-right' : 'animate-slide-left'}  
                  w-full max-w-full bg-white shadow-xl fixed overflow-auto top-[55px]
                   right-0 h-full sm:w-[500px] sm:max-w-[40vw] transition-all duration-300 z-50`}>

                <div className="flex-1 sm:w-full sm:max-w-full overflow-y-auto px-4 py-6 sm:px-6 ">
                  <div className="flex items-start justify-between">
                    <h2 className="">Giỏ hàng</h2>
                  </div>

                  <div className="flex items-center justify-center my-2">
                    <button onClick={handleShowCart}>
                      <svg
                        className="h-6 w-6 absolute right-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200 overflow-y-auto max-h-[450px]">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-[2rem] text-gray-900">
                                  <h3>
                                    <a href={item.href}>{item.productName}</a>
                                  </h3>
                                  <p className="ml-4">
                                    {item.priceAfterDisStr}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Số lượng: {item.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => handleDeleteProduct(item.id)}
                                  >
                                    Xoá
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tổng:</p>
                        <p>{total.toLocaleString('en-US')}đ</p>
                      </div></div>
                    <button className="w-full bg-slate-600 text-white h-6 rounded-[5px]">Đặt hàng</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (<React.Fragment>
          </React.Fragment>)
          }
        </React.Fragment >

      ) : (<React.Fragment>
      </React.Fragment>)
      }
      {
        showBars ? (
          <React.Fragment>
            <div className={`${showBars ? 'animate-slide-right' : 'animate-slide-left'} 
         bg-white w-full sm:w-[300px] sm:max-w-[100%] md:w-[300px] lg:hidden 
          shadow-xl fixed top-[55px] right-0 h-full max-w-full transition-all duration-300 z-40`}>

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
                        <a href="/" className="no-underline text-white flex items-center p-2 space-x-3 rounded-md">
                          <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff", }} /><span>Home</span>
                        </a>
                      </li>
                      {isLoggedin ? (
                        <React.Fragment>
                          <li className="rounded-sm">
                            <button className="flex items-center  p-2 space-x-3 rounded-md" onClick={handleshowinfo}>
                              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} />
                              <span>Thông tin cá nhân</span>
                            </button>
                          </li>
                          <li className="rounded-sm">
                            <button className="flex items-center  p-2 space-x-3 rounded-md" onClick={handleShowCart}>
                              <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} />
                              <span>Giỏ hàng ({`${cartItems.length}`})</span>
                            </button>
                          </li>
                          <li className="rounded-sm">
                            <a href="/logout" className="flex no-underline text-white items-center p-2 space-x-3 rounded-md">
                              <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", }} />
                              <span>Logout</span>
                            </a>
                          </li>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <li className="rounded-sm">
                            <a href="/login" className="flex no-underline text-white items-center p-2 space-x-3 rounded-md">
                              <FontAwesomeIcon icon={faRightToBracket} style={{ color: "#ffffff", }} />
                              <span>Login</span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a href="/register" className="flex no-underline text-white items-center p-2 space-x-3 rounded-md">
                              <FontAwesomeIcon icon={faUserPlus} style={{ color: "#ffffff", }} />
                              <span>Signup</span>
                            </a>
                          </li>
                        </React.Fragment>
                      )}

                    </ul>
                  </div>
                </div>
                {isLoggedin &&
                  <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end absolute bottom-0 h-2/5">
                    <img src={JSON.parse(localStorage.getItem("user"))?.image} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                    <div>
                      <h2 className="text-lg font-semibold">{JSON.parse(localStorage.getItem("user"))?.fullName}{" "}</h2>
                      <span className="flex items-center space-x-1">
                        <button className="text-xs hover:underline dark:text-gray-400" onClick={handleShowSidebar}>View profile</button>
                      </span>
                    </div>
                  </div>}
              </div>
            </div>
          </React.Fragment>
        ) : (<React.Fragment></React.Fragment>)
      }

      {/* POPUP INFOMATION */}
      {showInfor &&
        <React.Fragment>
          <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3 className="text-center w-full font-semibold leading-6 text-gray-900" id="modal-title">Thông tin cá nhân</h3>
                        <form>
                          <label className="block mb-2">Full Name:</label>
                          <input
                            type="text"
                            className="border border-[#ccc] px-3 py-2"
                            defaultValue={user.fullName} />
                          <label className="block mb-2">Email:</label>
                          <input
                            type="text"
                            className="border border-[#ccc] px-3 py-2"
                            defaultValue={user.email} />
                          <label className="block mb-2">Avatar:</label>
                          <input
                            type="file"
                            className="border border-[#ccc] px-3 py-2"
                            defaultValue={user.avatar} />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" className=" mt-3 inline-flex w-full justify-center rounded-md ml-2 bg-[#fff] px-3 py-2 text-sm font-semibold
                     text-[#000] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#000] hover:text-[#fff] sm:mt-0 sm:w-auto">Deactivate</button>
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold
                     text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleshowinfo}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
      }
      {/* END POPUP INFOMATION */}
    </React.Fragment >
  );
}
