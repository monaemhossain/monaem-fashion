import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import NotFound from "../Pages/NotFound/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

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
          element: <Shop></Shop>
        },
        {
          path: '/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
        ]
    },
  ]);

  export default Routes;