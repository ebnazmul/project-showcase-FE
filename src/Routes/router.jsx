import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Products from "../Products/Products";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);

export default router;
