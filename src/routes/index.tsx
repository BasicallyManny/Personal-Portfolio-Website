import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components/layout/Layout";

import {Home} from '../pages/Home'

const router  = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router