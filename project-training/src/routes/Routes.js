import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../template/Register';
import NotFound from '../template/NotFound';
import Logout from '../pages/Logout';

function RoutesComponents() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: '/logout',
      element: <Logout />
    },
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ]);
  return element;
  // return (
  //   <Routes>
  //     <Route path='/' element={<Home />}>
  //       <Route index element={<Navbar />} />
  //     </Route>
  //     <Route path="register" element={<RegisterPage />} />
  //     <Route path="login" element={<LoginPage />} />
  //     <Route path="*" element={<NotFound />} />
  //   </Routes>
  // )
}

export default RoutesComponents;