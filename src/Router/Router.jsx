import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import NotFoundErrorPage from "../errors/NotFoundErrorPage";
import ServiceDetails from "../Pages/ServiceDetails";
import PetShop from "../Pages/PetShop";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../Pages/ForgetPass";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/pet-shop',
                element: <PrivateRoute><PetShop></PetShop></PrivateRoute>
            },
            {
                path: '/services',
                Component: Services
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/forget-pass/:email',
                Component: ForgetPass
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
    {
        path: '/*',
        Component: NotFoundErrorPage,
    },
]);

export default router;