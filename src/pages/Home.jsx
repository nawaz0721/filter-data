import React from "react";
import ProductSlider from "../components/ProductSlider";
import FeaturedProducts from "../components/FeaturedProducts ";
import ContactForm from "../components/ContactForm ";

function Home() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Welcome to my website</h1>
        <p>Find the best products at unbeatable prices!</p>
      </header>

      {/* Product Slider */}
      <section id="product-slider">
        <h2>Featured Products</h2>
        <ProductSlider />
      </section>

      {/* Products on Sale or Important Products */}
      <section id="on-sale">
        <h2>Products On Sale</h2>
        <FeaturedProducts />
      </section>

      {/* Contact Us */}
      <section id="contact-us">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
