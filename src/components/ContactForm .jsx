import { Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.email);
    console.log(formData.name);
    // alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
    // You can handle form submission here (send data to backend)
  };

  return (
    <div className="contact-us-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            value={formData.name}
            onChange={handleChange}
            label="Name"
            id="name"
            className="my-4"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            type="text"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            id="email"
            className="my-4"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <Textarea
            value={formData.message}
            onChange={handleChange}
            label="Message"
            id="message"
            className="my-4"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
