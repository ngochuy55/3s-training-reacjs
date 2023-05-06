import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../template/404Page/NotFound";
import RegisterPages from "../pages/Register";
import { HomePage } from "../pages/Home";
import { ProductDetail } from "../pages/ProductDetail";

export function RoutesComponents() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [

      ]
    },
    {
      path: '/chi-tiet-san-pham/:id',
      element: <ProductDetail />
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