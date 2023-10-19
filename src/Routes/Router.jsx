import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import SignedIn from "./PrivateRoutes/SignedIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Blog from "../Pages/Blog/Blog";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <PrivateRoute>
          <Shop></Shop>
        </PrivateRoute>
      },
      {
        path: '/blog',
        element: <PrivateRoute>
          <Blog></Blog>
        </PrivateRoute>
      },
      {
        path: '/add-product',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: '/sign-in',
        element: <SignedIn>
          <SignIn></SignIn>
        </SignedIn>
      },
      {
        path: '/sign-up',
        element: <SignedIn>
          <SignUp></SignUp>
        </SignedIn>
      }
    ]
  },
]);

export default Routes;