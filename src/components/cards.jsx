import { Link } from "react-router-dom";

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
  return (
    <>
      <Link to={`/products/${id}`}>
        <div className="product-card">
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
    </>
  );
}

export default ProductCard;
