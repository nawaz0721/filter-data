function ProductCard({ product }) {
  return (
    <>
      <div className="product-card">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-price-rating">
            <span className="product-price">${product.price}</span>
            <div className="product-rating">
              <span className="rating-rate">⭐ {product.rating.rate}</span>
              <span className="rating-count">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
