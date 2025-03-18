import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContextProvider from "./utils/UserContextProvider";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContextProvider>
          <Header />
          <div className="w-[1200] m-auto pt-5">
            <Outlet />
          </div>
        </UserContextProvider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Cart Loading..</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
