import "./App.css";
import { Pagination } from "antd";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
