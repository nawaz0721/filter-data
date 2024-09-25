import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const {
    thumbnail,
    title,
    category,
    description,
    price,
    rating,
    rate,
    count,
    id,
  } = product;

  const { addToCart, isItemAdded } = useContext(CartContext);

  return (
    <>
      <div className="product-card">
        <Link to={`/products/${id}`}>
          <div>
            {/* <button className="wishlist-button">
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
            </button> */}
            <img
              className="product-image"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-price-rating">
                <span className="product-price">${product.price}</span>
                <div className="product-rating">
                  <span className="rating-rate">⭐ {product.rating}</span>
                  <span className="rating-count">(reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <button
          className="add-to-cart-product"
          onClick={() => {
            addToCart(product);
          }}
        >
          {isItemAdded(product.id)
            ? `Added (${isItemAdded(product.id).quantity})`
            : `Add to Cart`}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
