import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Signin from "../pages/Signin/Signin";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddItems from "../Dashboard/AddItems/AddItems";
import ManegeItems from "../Dashboard/ManegeItems/ManegeItems";
import UpdateItems from "../Dashboard/UddateItem/UpdateItems";
import AdminRoute from "../Routes/AdminRoute";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/Payment/paymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'userHome',
                element: <h2>User Home</h2>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            //admin only routes
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'additems',
                element: <AddItems></AddItems>
            },
            {
                path: 'updateitem/:id',
                element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
                loader: ({params}) => fetch(`https://bistro-boss-server-seven-gray.vercel.app/menu/${params.id}`)
            },
            {
                path: 'manegeitems',
                element: <ManegeItems></ManegeItems>
            }
        ]
    }
])