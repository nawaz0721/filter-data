import React from "react";
import product4 from "../Images/product 4 sale.avif";
import product5 from "../Images/product 5 sale.avif";

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <div className="product">
        <img src={product4} alt="Product 1" />
        <p>Product 1 - On Sale!</p>
      </div>
      <div className="product">
        <img src={product5} alt="Product 2" />
        <p>Product 2 - Special Offer!</p>
      </div>
      {/* Add more products as needed */}
    </div>
  );
}

export default FeaturedProducts;
