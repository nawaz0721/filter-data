import { useContext, useEffect, useState } from "react";
import { Pagination } from "antd";
import ProductCard from "../components/cards";
import CategoriesChips from "../components/CategoriesChips";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const { cartItems } = useContext(CartContext);

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
        setCategories(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Sort products based on search and sortOrder
  const sortProducts = (data) => {
    if (sortOrder === "A-Z") {
      return data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "Z-A") {
      return data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "Price Asc") {
      return data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "Price Desc") {
      return data.sort((a, b) => b.price - a.price);
    }
    return data;
  };

  // Filter and sort products based on search input and sorting
  const filtered = sortProducts(
    products.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container">
      {/* Category Chips */}
      <div className="flex gap-2 flex-wrap">
        <CategoriesChips
          onClick={() => setChosenCategory("All")}
          category={{
            slug: "All",
            name: "All",
          }}
          isChosen={"All" === chosenCategory}
        />
        {categories.map((category, index) => (
          <CategoriesChips
            onClick={() => setChosenCategory(category.slug)}
            isChosen={category.slug === chosenCategory}
            key={index}
            category={category}
          />
        ))}
      </div>
      {/* Search Bar and Sorting Dropdown */}
      <div className="search-bar">
        <input
          placeholder="Search for products"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Sorting Dropdown */}
        <div className="sorting-dropdown">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Price Asc">Price: Low to High</option>
            <option value="Price Desc">Price: High to Low</option>
          </select>
        </div>
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
