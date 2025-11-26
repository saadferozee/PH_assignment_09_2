import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import NotFoundErrorPage from "../errors/NotFoundErrorPage";
import ServiceDetails from "../Pages/ServiceDetails";
import PetShop from "../Pages/PetShop";
import PrivateRoute from "./PrivateRoute";


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
                path: '/about',
                Component: About
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