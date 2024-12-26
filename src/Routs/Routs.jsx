import { createBrowserRouter } from "react-router-dom";
import Addcoffee from "../Pages/AddCoffee/Addcoffee";
import Home from "../Pages/Home/Home";
import Updatecoffee from "../Pages/Updatecoffee/Updatecoffee";
import Root from "../Root/Root";




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
                element:<Addcoffee></Addcoffee>
            },
            {
                path:'/updateCoffee',
                element:<Updatecoffee></Updatecoffee>
            },
        ]
    }
])
export default routs;
