import { useRoutes } from "react-router-dom";
import Home from "../template/Home";
import LoginPage from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../template/404Page/NotFound";
import RegisterPages from "../pages/Register";

export function RoutesComponents() {
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
      element: <RegisterPages />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ]);
  return element;
}