import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components/layout/Layout";

import {Home} from '../pages/Home'
import Projects from "../components/sections/Projects";
import Resume from "../pages/Resume";

const router  = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/about",
                element: <Home />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
        ],
    },
]);

export default router