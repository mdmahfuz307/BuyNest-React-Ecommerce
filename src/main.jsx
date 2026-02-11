import ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import "./index.css";
import router from "./router/Router.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <WishlistProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </WishlistProvider>
  </CartProvider>,
);
