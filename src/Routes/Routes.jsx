import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import LogIn from "../Pages/Login/Login";

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
            element:<Gallery/>
        },
        {
            path:'/login',
            element:<LogIn/>
        }
      ]
    },
  ]);

  export default router;