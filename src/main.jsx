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

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
