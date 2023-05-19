import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Alltoys from "../Pages/Alltoys/Alltoys";
import Mytoys from "../Pages/Mytoys/Mytoys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Signup></Signup>,
      },
      {
        path: "/alltoys",
        element: <Alltoys></Alltoys>,
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      }
    ]
  },
]);

export default router;