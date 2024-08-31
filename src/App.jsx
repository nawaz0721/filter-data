import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/cards";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Component mounted");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  console.log(products);

  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input
            placeholder="Search for products"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="product-list">
          {filtered.map((data) => (
            <ProductCard key={data.id} product={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
