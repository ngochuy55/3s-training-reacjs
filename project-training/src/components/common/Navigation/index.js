import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Navbar({
  cartItems,
}) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const logo = require('../../../assets/images/logo-fix.png')
  let item = localStorage.getItem('user')
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  useEffect(() => {
    // console.log("type", typeof (cartItems));
    if (cartItems.length !== 0) {
      const totalPrice = cartItems.reduce((sum, item) => {
        console.log(sum + item.price * item.quantity);
        return sum + item.price * item.quantity;
      }, 0)
      setTotal(totalPrice);
    }
  }, [cartItems])

  useEffect(() => {
    if (item === '' || item === null)
      setIsLoggedin(false);
    else setIsLoggedin(true);

  }, []);
  return (
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
          bg-[#ccc] fixed top-[55px] right-0 h-full w-[300px] max-w-[40vw] transition-all duration-300 z-[1000]`}>
            <h2>Giỏ hàng</h2>
            {cartItems.map((item) => (
              <div key={item.id}>
                {item.productName} {item.quantity} {item.priceStr}
              </ div >
            ))}
            <p className=''>Tổng: {total.toLocaleString('en-US')}đ</p>
            <button>Đặt hàng</button>
          </div>
        </React.Fragment>
      ) : (<React.Fragment>
      </React.Fragment>)
      }
    </React.Fragment >
  )
}