import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import ShopBrand from "../Components/ShopBrand/ShopBrand";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import SignedIn from "./PrivateRoutes/SignedIn";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import ProductDetails from "../Components/Products/ProductDetails";
import Shop from "../Pages/Shop/Shop";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/shop',
        element: <PrivateRoute>
          <Shop></Shop>
        </PrivateRoute>
      },
      {
        path: '/shop-brand',
        element: <PrivateRoute>
          <ShopBrand></ShopBrand>
        </PrivateRoute>
      },
      {
        path: '/product-details',
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
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