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
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import UpdateSports from "../Pages/UpdateSports/UpdateSports";
import TabviewDetailsallinfo from '../Pages/TabviewDetailsallinfo/TabviewDetailsallinfo'
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
        loader:() => fetch("https://toy-sportz-server-site-sohag292.vercel.app/addToy")
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
      },
      {
        path: "/ToysDetails/:id",
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://toy-sportz-server-site-sohag292.vercel.app/addToy/${params.id}`)
      },
      {
        path: "/mytoys/updateSports/:id",
        element: <UpdateSports></UpdateSports>,
        loader:({params})=>fetch(`https://toy-sportz-server-site-sohag292.vercel.app/addToy/${params.id}`)
      },
      {
        path: "/TabviewDetailsallinfo/:id",
        element: <PrivateRoute><TabviewDetailsallinfo></TabviewDetailsallinfo></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-sportz-server-site-sohag292.vercel.app/addToy/${params.id}`)
      }

    ]
  },
]);

export default router;