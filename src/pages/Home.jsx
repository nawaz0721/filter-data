import React from "react";
import FeaturedProducts from "../components/FeaturedProducts ";
import ContactForm from "../components/ContactForm ";
import ProductCarousel from "../components/ProductCarousel";
import product1 from "../Images/product 1.avif";
import product2 from "../Images/product 2.avif";
import product3 from "../Images/product 3.avif";
import product4 from "../Images/product 4 sale.avif";
import product5 from "../Images/product 5 sale.avif";

function Home() {
  const products = [
    { id: 1, name: "1", image: product1 },
    { id: 2, name: "2", image: product2 },
    { id: 3, name: "3", image: product3 },
    { id: 4, name: "4", image: product4 },
    { id: 5, name: "5", image: product5 },
  ];

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Welcome to my website</h1>
        <p>Find the best products at unbeatable prices!</p>
      </header>

      {/* Product Slider */}
      <section id="product-slider">
        <ProductCarousel products={products} />
      </section>

      {/* Products on Sale or Important Products */}
      <section id="on-sale">
        <h1>Products On Sale</h1>
        <FeaturedProducts />
      </section>

      {/* Contact Us */}
      <section id="contact-us">
        <h1>Contact Us</h1>
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
