import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import NotFound from "../Pages/NotFound/NotFound";

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
        }
      ]
    },
  ]);

  export default Routes;