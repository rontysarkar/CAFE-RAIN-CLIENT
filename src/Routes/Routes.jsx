import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import LogIn from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import SingleFoods from "../Pages/SingleFoods/SingleFoods";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/allFoods',
            element:<AllFoods/>
        },
        {
            path:'/gallery',
            element:<PrivetRoutes><Gallery/></PrivetRoutes>
        },
        {
            path:'/login',
            element:<LogIn/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/singleFoods/:id',
            element:<SingleFoods/>,
            loader:({params})=>fetch(`${import.meta.env.VITE_url}/foods/${params.id}`)
        },
        {
            path:'/foodPurchase/:id',
            element:<PrivetRoutes><FoodPurchase/></PrivetRoutes>,
            loader:({params})=>fetch(`${import.meta.env.VITE_url}/foods/${params.id}`)
        }
      ]
    },
  ]);

  export default router;