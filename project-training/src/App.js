
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesComponents } from "./routes/Routes";

function App() {
  //thay đổi router, react-router-dom => link các path name
  // login, home, register,...
  // đã đăng nhập rồi redirect home, redirect login
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RoutesComponents />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
