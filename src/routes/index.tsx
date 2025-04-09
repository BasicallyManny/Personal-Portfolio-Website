import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components/layout/Layout";

import {Home} from '../pages/Home'
import Projects from "../components/sections/Projects";

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
            }
        ],
    },
]);

export default router