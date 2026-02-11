import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import CategoryProducts from "../pages/CategoryProducts";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Home/SingleProduct";
import SearchResults from "../pages/SearchResults";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/category/:category", element: <CategoryProducts /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/search", element: <SearchResults /> },
    ],
  },
]);

export default router;
