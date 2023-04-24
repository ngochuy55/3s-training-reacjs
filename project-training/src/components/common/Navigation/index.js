import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../assets/css/Navigation.css'
import '../../../assets/css/Responsive.css'

export function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const logo = require('../../../assets/images/logo-fix.png')
  let item = localStorage.getItem('user')
  // const user = JSON.parse(item)
  // let userobj;
  //Chuyển array user thành obj
  // if (user) {
  //   userobj = user.reduce((acc) => {
  //     return acc;
  //   })
  // }
  useEffect(() => {
    if (item === '' || item === null)
      setIsLoggedin(false);
    else setIsLoggedin(true);

    console.log((localStorage.getItem("user")));
    // console.log("abc");
  }, []);
  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <div className='Search_input_container'>
            <input type='text' className='search_input' placeholder='Nhập tên điện thoại cần tìm' />
            <span className='search-btn'><FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} /></span>
          </div>
          <div className='shopping_cart'>
            <FontAwesomeIcon className='cart-icon' icon={faCartShopping} /><br />
            <span>Giỏ hàng</span>
          </div>

          <div className='right'>
            {isLoggedin ? (
              <React.Fragment>
                <div className="dropdown">
                  <p className="dropdown-toggle m-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* <img src={userobj}/> */}
                    {/* Welcome back "{userobj?.fullName}" */}
                    Welcome: {JSON.parse(localStorage.getItem("user")).fullName}{" "}!
                  </p>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a className="dropdown-item" href="/">Thông tin cá nhân</a></li>
                    <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                  </ul>
                </div>
              </React.Fragment>
            ) : (
              <ul className='link_item'>
                <li className="nav-item">
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
    </React.Fragment >
  )
}