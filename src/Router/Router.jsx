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
                Component: ServiceDetails
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/*',
                Component: NotFoundErrorPage,
            }
        ]
    }
]);

export default router;