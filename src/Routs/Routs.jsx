import { createBrowserRouter } from "react-router-dom";
import Addcoffee from "../Pages/AddCoffee/Addcoffee";
import Home from "../Pages/Home/Home";
import Updatecoffee from "../Pages/Updatecoffee/Updatecoffee";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import CoffeeDetail from "../Pages/Detail/CoffeeDetail";
import MyCoffee from "../Pages/Mycoffee/MyCoffee";




const routs = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/coffees')
            },
            {
                path:'/addCoffee',
                element:<PrivateRoute><Addcoffee></Addcoffee></PrivateRoute>
            },
            {
                path:'/myCoffee',
                // path:'/myCoffee/:email',
                element:<PrivateRoute><MyCoffee></MyCoffee></PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.email}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><CoffeeDetail></CoffeeDetail></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
            },
        ]
    }
])
export default routs;
