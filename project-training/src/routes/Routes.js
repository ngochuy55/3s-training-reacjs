import { useRoutes } from "react-router-dom";
import Home from "../template/Home";
import LoginPage from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../template/404Page/NotFound";
import { Footer } from "../components/common/Footer";
import { HomePage } from "../pages/Home";

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
    // {
    //   path: '/register',
    //   element: <RegisterPage />
    // },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/footer',
      element: <Footer />
    }
  ]);
  return element;
}