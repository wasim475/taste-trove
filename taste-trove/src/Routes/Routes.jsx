import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllFoods from "../Components/NavItems/AllFoods/AllFoods";
import Gallery from "../Components/NavItems/Gallery/Gallery";
import MyProfile from "../Components/NavItems/My profile/MyProfile";
import Login from "../Pages/SharedPages/Navbar/Login/Login";
import Register from "../Pages/SharedPages/Navbar/Register/Register"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allFoods',
            element: <AllFoods></AllFoods>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        {
            path: '/my-profile',
            element: <MyProfile></MyProfile>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default router;