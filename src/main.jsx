import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/root-layout.layout";
import MainLayout from "./layouts/main-layout.layout";
import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/sign-in.page";
import SignUpPage from "./pages/sign-up.page";
import ProductPage from "./pages/product.page";
import ScrollToTop from "./components/shared/ScrollToTop";
import CartPage from "./pages/cart.page";
import { CartProvider } from "./lib/CartContext";
import ShopPage from "./pages/shop/shop.page";

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/shop/cart" element={<CartPage />} />
            <Route path="/shop">
              <Route index element={<ShopPage />} />
              <Route path=":category" element={<ShopPage />} />
            </Route>
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
