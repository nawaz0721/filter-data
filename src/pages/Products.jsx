import { useEffect, useState } from "react";
import { Pagination } from "antd";
import ProductCard from "../components/cards";
import CategoriesChips from "../components/CategoriesChips";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("All");

  // Fetch products based on category, limit, and skip (pagination)
  useEffect(() => {
    const url =
      chosenCategory === "All"
        ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [limit, skip, chosenCategory]);

  // Fetch product categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data); // Corrected the response handling
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter products based on search input
  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          placeholder="Search for products"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Chips */}
      <div className="flex gap-2 flex-wrap">
        <CategoriesChips
          onClick={() => setChosenCategory("All")} // Added onClick for "All" category
          category={{
            slug: "All",
            name: "All",
          }}
          isChosen={"All" === chosenCategory}
        />
        {categories.map((category, index) => (
          <CategoriesChips
            onClick={() => setChosenCategory(category.slug)} // Properly handle category change
            isChosen={category.slug === chosenCategory}
            key={index}
            category={category}
          />
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filtered.map((data) => (
          <ProductCard key={data.id} product={data} />
        ))}
        {loading && <div className="loading">Loading...</div>}
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          align="center"
          onChange={(num) => setSkip((num - 1) * limit)}
          onShowSizeChange={(page, pageSize) => setLimit(pageSize)}
          current={skip / limit + 1}
          total={total}
          pageSize={limit}
        />
      </div>
    </div>
  );
}

export default Products;
