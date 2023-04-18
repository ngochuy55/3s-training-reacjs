import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../assets/css/Navigation.css'

export function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const logo = require('../../../assets/images/logo-fix.png')
  let item = localStorage.getItem('user')
  const user = JSON.parse(item)
  let userobj;
  //Chuyển array user thành obj
  if (user) {
    userobj = user.reduce((acc) => {
      return acc;
    })
  }
  useEffect(() => {
    if (item === '' || item === null)
      setIsLoggedin(false)
  })
  return (
    // <React.Fragment>
    //   <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
    //     <div className="container">
    //       <a className='logo' href='/'>
    //         <img className='navbar-brand' src={logo}></img>
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <div className="mx-auto"></div>
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className="nav-link text-dark" href="/">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-dark" href="/about">Introduce</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-dark" href="/blog">Product</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-dark" href="/price">New</a>
    //           </li>
    //           <li className="nav-item contact">
    //             <a className="nav-link text-dark" href="/contact">Contact</a>
    //           </li>
    //           {isLoggedin ? (
    //             <>
    //               <div className="dropdown">
    //                 {/* <p className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                   Welcome back "{userobj.fullName}"
    //                 </p> */}
    //                 <ul className="dropdown-menu dropdown-menu-right">
    //                   <li><a className="dropdown-item" href="/">Thông tin cá nhân</a></li>
    //                   <li><a className="dropdown-item" href="/logout">Log Out</a></li>
    //                 </ul>
    //               </div>


    //             </>
    //           ) : (
    //             <>
    //               {isLoginPage ? (
    //                 <></>
    //               ) : (
    //                 <>
    //                   <li className="nav-item">
    //                     <a className="nav-link text-dark" href="/login">Login</a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a className="nav-link text-dark" href="/register">Sign Up</a>
    //                   </li>
    //                 </>
    //               )}
    //             </>
    //           )
    //           }
    //         </ul>
    //       </div>
    //     </div>
    //   </nav >
    //   <Outlet />

    // </React.Fragment>
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
                  <p className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* <img src={userobj}/> */}
                    Welcome back "{userobj?.fullName}"
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