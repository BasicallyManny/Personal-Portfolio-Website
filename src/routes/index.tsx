import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components/layout/Layout";

const router  = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
        ],
    },
]);

export default router