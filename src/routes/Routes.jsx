import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import PrivateAddTouristsSpot from "../pages/PrivateAddTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateMyList from "../pages/PrivateMyList";
import MyList from "../pages/MyList";
import Details from "../components/Details";
import UpdateSpot from "../components/UpdateSpot";
import NotFoundPage from "../components/NotFoundPage";
import About   from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tour-avels-server.vercel.app/touristsSpot')
            },
            {
                path: '/explore',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('https://tour-avels-server.vercel.app/touristsSpot')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://tour-avels-server.vercel.app/touristsSpot/${params.id}`)
            },
            {
                path: '/addSpot',
                element: <PrivateAddTouristsSpot><AddTouristsSpot></AddTouristsSpot></PrivateAddTouristsSpot> 
            },
            {
                path: '/myList',
                element: <PrivateMyList><MyList></MyList></PrivateMyList>,
                loader: () => fetch('https://tour-avels-server.vercel.app/touristsSpot')
            },
            {
                path: 'mylist/updatespot/:id',
                element: <UpdateSpot></UpdateSpot>,
                loader: ({params}) => fetch(`https://tour-avels-server.vercel.app/touristsSpot/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]);
export default router;