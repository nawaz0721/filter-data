import React from "react";
import product1 from "../Images/product 1.avif";
import product2 from "../Images/product 2.avif";
import product3 from "../Images/product 3.avif";
import product4 from "../Images/product 4 sale.avif";
import product5 from "../Images/product 5 sale.avif";

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <div className="product">
        <img src={product4} alt="Product 4" />
        <p>On Sale!</p>
      </div>
      <div className="product">
        <img src={product1} alt="Product 1" />
        <p>On Sale!</p>
      </div>
      <div className="product">
        <img src={product2} alt="Product 2" />
        <p>On Sale!</p>
      </div>
      <div className="product">
        <img src={product3} alt="Product 3" />
        <p>Special Offer!</p>
      </div>
      <div className="product">
        <img src={product5} alt="Product 5" />
        <p>Special Offer!</p>
      </div>
    </div>
  );
}

export default FeaturedProducts;
