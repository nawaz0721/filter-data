import "./App.css";
import Navbar from "./components/Navbar";
import { Pagination } from "antd";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
