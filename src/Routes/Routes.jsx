import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Alltoys from "../Pages/Alltoys/Alltoys";
import Mytoys from "../Pages/Mytoys/Mytoys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element:<Signup></Signup>,
      },
      {
        path: "/alltoys",
        element:<Alltoys></Alltoys>,
      },
      {
        path: "/mytoys",
        element:<Mytoys></Mytoys>,
      },
      {
        path: "/addtoy",
        element:<AddToy></AddToy>,
      },
      {
        path: "/blogs",
        element:<Blogs></Blogs>,
      }
    ]
  },
]);

export default router;