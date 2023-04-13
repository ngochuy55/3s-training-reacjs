import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



function Navbar() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [isLoginPage, setLogginPage] = useState(false);
  const location = useLocation();
  const logo = require('../../assets/images/logo-fix.png')
  let item = localStorage.getItem('token-info')
  useEffect(() => {
    if (item === '' || item === null)
      setIsLoggedin(false)
    if (location.pathname === '/login' || location.pathname === '/register')
      setLogginPage(true)
  })
  return (
    <>

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
        <div className="container">
          <a href='/'>
            <img className='navbar-brand' src={logo}></img></a>
          {/* <a className="navbar-brand" href="/">LOGO</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/price">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/contact">Contact</a>
              </li>
              {isLoggedin ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/logout">Logout</a>
                  </li>
                </>
              ) : (
                <>
                  {isLoginPage ? (
                    <></>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="/login">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="/register">Sign Up</a>
                      </li>
                    </>
                  )}
                </>
              )
              }
            </ul>
          </div>
        </div>
      </nav >
      <Outlet />
    </>
  );
}

export default Navbar;