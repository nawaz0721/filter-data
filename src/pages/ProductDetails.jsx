import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { addToCart, isItemAdded } = useContext(CartContext);

  useEffect(() => {
    setNotFound(false);
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setNotFound(true);
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  return (
    <div className="product-details-container">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : notFound ? (
        <h1 className="not-found">Product Not Found...</h1>
      ) : (
        <section className="product-details">
          <Link to={"/products"}>
            <span className="back-to-shop">← Back to Shop</span>
          </Link>
          <div className="flex flex-wrap justify-center">
            <img
              alt="ecommerce"
              className="product-image-details"
              src={product.thumbnail}
            />
            <div className="product-info">
              <h2 className="product-category">{product.category}</h2>
              <h1 className="product-title">{product.title}</h1>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    fill={index < product.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span>{product.rating} Reviews</span>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="action-buttons">
                <span className="product-price">${product.price}</span>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  {isItemAdded(product.id)
                    ? `Added (${isItemAdded(product.id).quantity})`
                    : `Add to Cart`}
                </button>
                <button className="wishlist-button">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
