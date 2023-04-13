import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from '../src/assets/images/logo-fix.png'
import RoutesComponents from './routes/Routes';

function App() {
  //thay đổi router, react-router-dom => link các path name
  // login, home, register,...
  // đã đăng nhập rồi redirect home, redirect login
  // khai bao localStorage
  // useEffect || kiem tra localStorage da dang nhap navigate('/') else navigate('/login')

  return (
    <React.StrictMode>
      <BrowserRouter>
        <RoutesComponents />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;
