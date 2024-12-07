import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/user/HomePage";

import Footer from "./ui/Footer";
import Header from "./components/header/Header";
import { ErrorPage } from "./pages/common/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ForgetPassword } from "./pages/authen/ForgotPassword";
import { Login } from "./pages/authen/Login";
import { Register } from "./pages/authen/Register";
import { NewPassword } from "./pages/authen/NewPassword";
import { Success } from "./pages/authen/Success";
import { VertifiOTP } from "./pages/authen/VetifyOTP";
import { ShopPage } from "./pages/user/ShopPage";
import DetailPage from "./pages/user/DetailPage";
import CardPage from "./pages/user/CardPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import CompletePage from "./pages/user/CompletePage";
import AboutPage from "./pages/user/AboutPage";
import ContactPage from "./pages/user/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Route mặc định cho các trang không tồn tại */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/vetify" element={<VertifiOTP />} />
          <Route path="/shopPage" element={<ShopPage />} />
          <Route path="/detailPage" element={<DetailPage />} />
          <Route path="/cardPage" element={<CardPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route path="/completePage" element={<CompletePage />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
