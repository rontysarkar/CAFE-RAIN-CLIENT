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
import MyAddFood from "../Pages/MyAddFood/MyAddFood";
import AddFood from "../Pages/AddFood/AddFood";
import MyOrderedFood from "../Pages/MyOrderedFood/MyOrderedFood";
import Update from "../Pages/Update/Update";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllFoodItems from "../Pages/Dashboard/AllFoodItems/AllFoodItems";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
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
            element:<Gallery/>
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
        },
        
        
        {
            path:'/myOrderedFood',
            element:<PrivetRoutes><MyOrderedFood/></PrivetRoutes>
        },
        {
            path:'/update/:id',
            element:<Update/>,
            loader:({params})=>fetch(`${import.meta.env.VITE_url}/foods/${params.id}`)
        }
      ]
    },
    {
        path:'dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'allFoodItems',
                element:<AllFoodItems/>
            },
            {
                path:'allUsers',
                element:<AllUsers/>
            },
            {
                path:'dashboard',
                element:<div>hello</div>
            },
            {
                path:'addFood',
                element:<PrivetRoutes><AddFood/></PrivetRoutes>
            },
            {
                path:'myAddedFood',
                element:<PrivetRoutes><MyAddFood/></PrivetRoutes>
            }
        ]
    }
  ]);

  export default router;