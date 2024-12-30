import { createBrowserRouter } from "react-router-dom";
import Addcoffee from "../Pages/AddCoffee/Addcoffee";
import Home from "../Pages/Home/Home";
import Updatecoffee from "../Pages/Updatecoffee/Updatecoffee";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";




const routs = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addCoffee',
                element:<PrivateRoute><Addcoffee></Addcoffee></PrivateRoute>
            },
            {
                path:'/updateCoffee',
                element:<PrivateRoute><Updatecoffee></Updatecoffee></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
])
export default routs;
