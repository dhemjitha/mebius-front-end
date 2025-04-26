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
import AccountPage from "./pages/account.page";
import ProtectedLayout from "./layouts/protected-layout.layout";
import BecomeASellerPage from "./pages/become-a-seller.page";
import AdminProtectedLayout from "./layouts/admin-protected-layout.layout";
import AdminDashboardPage from "./pages/admin/admin.dashboard.page";
import AdminUsersPage from "./pages/admin/admin.users.page";
import AdminProductsPage from "./pages/admin/admin.products.page";
import SellerProtectedLayout from "./layouts/seller-protected-layout.layout";
import SellerDashboardPage from "./pages/seller/seller.dashboard.page";
import SellerCreateProductPage from "./pages/seller/seller.create.product.page";
import SellerProductsPage from "./pages/seller/seller.products.page";
import SellerOrderPage from "./pages/seller/seller.order.page";
import AdminOrderPage from "./pages/admin/admin.order.page";
import AdminTrendingProductPage from "./pages/admin/admin.trending.product.page";
import AdminVariantConfigPage from "./pages/admin/admin.variant.config.page";
import SellerVariantConfigPage from "./pages/seller/seller.variant.config.page";



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
            <Route element={<ProtectedLayout />}>
              <Route path="/account" element={<AccountPage />} />
              <Route path="/become-a-seller" element={<BecomeASellerPage />} />
            </Route>
          </Route>

          <Route path="/admin" element={<AdminProtectedLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="orders" element={<AdminOrderPage />} />
            <Route path="trending-products" element={<AdminTrendingProductPage />} />
            <Route path="variant-config" element={<AdminVariantConfigPage />} />
          </Route>

          <Route path="/seller" element={<SellerProtectedLayout />}>
            <Route index element={<SellerDashboardPage />} />
            <Route path="create-product" element={<SellerCreateProductPage />} />
            <Route path="products" element={<SellerProductsPage />} />
            <Route path="orders" element={<SellerOrderPage />} />
            <Route path="variant-config" element={<SellerVariantConfigPage />} />
          </Route>

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </CartProvider>
);
