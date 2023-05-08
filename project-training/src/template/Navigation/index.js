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

  total,
  handleShowCart,
  showCart,
  cartItems,
  handleDeleteProduct
}) {
  // const [value, setValue] = useState("");
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
            <FontAwesomeIcon className="text-[20px]" icon={faCartShopping} onClick={handleShowCart} />
            <br />
            <span className="absolute w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 -right-3">
              {`${cartItems.length}`}
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
      {showCart ? (
        <React.Fragment>
          <nav className='w-full bg-[#CD1818] text-white h-[56px] leading-[56px] fixed top-0 left-0 right-0 z-40'>
            <div className='flex container items-center justify-between'>
              <div className='w-[50px] h-[50px]'>
                <a href='/'><img src={logo} alt='' className='h-full' /></a>
              </div>
              <form className='w-[496px] flex'>
                <input type='text' className='h-[38px] w-full pl-4 outline-none text-[#000]' placeholder='Nhập tên điện thoại cần tìm' />
                <span className='w-[58px] h-[38px] flex items-center justify-center bg-[#333]'><FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} /></span>
              </form>
              <div className='relative'>
                <button><FontAwesomeIcon className='text-[20px]' icon={faCartShopping} onClick={handleShowCart} /><br /></button>
                <span className='absolute w-[15px] h-[15px] text-center leading-[15px] rounded-[50%] bg-white text-[#cd1818] top-3 -right-3'>
                  {`${cartItems.length}`}
                </span>
              </div>
              <FontAwesomeIcon className='hidden' icon={faBars} />
              <div>
                {isLoggedin ? (
                  <React.Fragment>
                    <div className="dropdown">
                      <p className="dropdown-toggle m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Welcome: {JSON.parse(localStorage.getItem("user")).fullName}{" "}!
                      </p>
                      <ul className="dropdown-menu dropdown-menu-right transform transition duration-500 scale-0 translate-y-2">
                        <li><a className="dropdown-item" href="/">Thông tin cá nhân</a></li>
                        <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                      </ul>
                    </div>
                  </React.Fragment>
                ) : (
                  <ul className='flex m-0'>
                    <li className="mr-3">
                      <a className="nav-link text-white" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/register">Sign Up</a>
                    </li>
                  </ul>
                )
                }
              </div>
            </div>

          </nav>
          {showCart ? (
            <React.Fragment>
              <div className={`${showCart ? 'animate-slide-right' : 'animate-slide-left'} 
           bg-white shadow-xl fixed top-[55px] right-0 h-full w-[500px] max-w-[40vw] transition-all duration-300 z-[1000]`}>

                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                  <div className="flex items-start justify-between">
                    <h2 className=''>Giỏ hàng</h2>
                  </div>


                  <div className='flex items-center justify-center my-2'>
                    <button onClick={handleShowCart}>
                      <svg className="h-6 w-6 absolute right-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
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
                                  <p className="ml-4">{item.priceAfterDisStr}</p>
                                </div>

                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Số lượng:  {item.quantity}</p>

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
                    <button>Đặt hàng</button>
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
    </React.Fragment>
  );
}
