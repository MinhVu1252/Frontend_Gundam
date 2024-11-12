import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/user/HomePage"
import Banner from "./components/banner/Banner"
import Footer from "./ui/Footer"
import Header from "./components/header/Header"
import { ErrorPage } from "./pages/common/ErrorPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Route mặc định cho các trang không tồn tại */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
