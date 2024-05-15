import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Gallery from "../Components/NavItems/Gallery/Gallery";
import MyProfile from "../Components/NavItems/My profile/MyProfile";
import Login from "../Pages/SharedPages/Navbar/Login/Login";
import Register from "../Pages/SharedPages/Navbar/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import AllFoods from "../Components/NavItems/AllFoods/AllFoods"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AddFoodItem from "../Components/NavItems/My profile/Add Food Item/AddFoodItem";
import MyAddedFoodItems from "../Components/NavItems/My profile/My Added Food Items/MyAddedFoodItems";
import SingleFoodPage from "../Components/NavItems/AllFoods/SingleFoodPage";
import AllFoods from "../Components/NavItems/AllFoods/AllFoods";
import UpdateMyFoodInfo from "../Components/NavItems/My profile/My Added Food Items/UpdateMyFoodInfo";
import UserChoice from "../Components/NavItems/Gallery/UserChoice";
import MyRoute from "../My Route/MyRoute";
import CheckOut from "../Components/NavItems/AllFoods/Purchase";
import Purchase from "../Components/NavItems/AllFoods/Purchase";
import MyOrderedFood from "../Components/NavItems/My profile/My Order Food Items/MyOrderedFood";

// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("https://taste-trove-server-sigma.vercel.app/foods")
      },
      {
        path: "/allFoods/:id",
        element: <SingleFoodPage></SingleFoodPage>,
        loader: () => fetch("https://taste-trove-server-sigma.vercel.app/foods")
      },
      {
        path: '/updateFoodInfo/:id',
        element: <PrivateRoute>
          <UpdateMyFoodInfo></UpdateMyFoodInfo>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://taste-trove-server-sigma.vercel.app/foods/${params.id}`)
      },
      {
        path: '/userChoice',
        element: <PrivateRoute>
          <UserChoice></UserChoice>
        </PrivateRoute>
      },
      {
        path: '/my-order-list',
        element: <PrivateRoute>
          <MyOrderedFood></MyOrderedFood>
        </PrivateRoute>
      },
      {
        path: '/purchase/:id',
        element: <PrivateRoute>
          <Purchase></Purchase>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://taste-trove-server-sigma.vercel.app/foods/${params.id}`)
      },
      {
        path: "/gallery",
        element: <MyRoute>
          <Gallery></Gallery>
        </MyRoute>,
        loader: () => fetch("https://taste-trove-server-sigma.vercel.app/userChoice")
      },
      {
        path: "/added-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem></AddFoodItem>
          </PrivateRoute>
        )
      },
      {
        path: "/my-added-foods",
        element: (
          <PrivateRoute>
            <MyAddedFoodItems></MyAddedFoodItems>
          </PrivateRoute>
        ),
        loader: () => fetch("https://taste-trove-server-sigma.vercel.app/foods")
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        )
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
]);

export default router;
