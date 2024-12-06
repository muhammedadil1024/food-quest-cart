import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./pages/Error";
import Body from "./components/Body";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RestaurantMenu from "./pages/RestaurantMenu";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";
import OrderSummary from "./pages/OrderSummary";

// Lazy loading pages example
const Cart = lazy(() => import("./pages/Cart"));

// all routing using - createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/order-summary",
                element: <OrderSummary />
            },
        ]
    },
]);

export default appRouter;
