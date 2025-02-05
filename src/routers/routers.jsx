import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddEquepment from "../pages/AddEquepment/AddEquepment";
import UpdateItem from "../pages/UpdateItem/UpdateItem";
import PrivetRoute from "./PrivetRouters";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Details from "../pages/Details/Details";
import AllEquepment from "../pages/AllEquepment/AllEquepment";
import MyEquepment from "../pages/MyEquepment/MyEquepment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home ></Home>,
                loader: () => fetch('https://assignment-10-server-mu-three.vercel.app/products')
               
            },

            {
                path: '/alleqepment',
                element: <AllEquepment ></AllEquepment>,
                loader: () => fetch('https://assignment-10-server-mu-three.vercel.app/products')
            },
            {
                path: '/login',
                element: <Login ></Login>

            },
            {
                path: '/register',
                element: <Register ></Register>

            }, {
                path: '/forgorpassword',
                element: <ForgotPassword ></ForgotPassword>
            },
            {
                path: '/addequipment',
                element: <PrivetRoute >
                    <AddEquepment ></AddEquepment>
                </PrivetRoute>
            },
            {
                path: '/updateitem/:id',
                element: <PrivetRoute >
                    <UpdateItem ></UpdateItem>
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-mu-three.vercel.app/products/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivetRoute >
                    <Details ></Details>
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-mu-three.vercel.app/products/${params.id}`)

            },
            {
                path: '/myequepment',
                element: <PrivetRoute >
                    <MyEquepment ></MyEquepment>
                </PrivetRoute>,

            }
        ]

    },

])

export default routers