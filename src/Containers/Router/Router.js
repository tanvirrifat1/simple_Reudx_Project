import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ProductDetails from "../ProductDetails";
import ProductListing from "../ProductListing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <ProductListing />
            },
            {
                path: '/product/:productId',
                element: <ProductDetails />
            },
        ]
    }
])