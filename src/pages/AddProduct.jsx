import React, { useState } from "react";
import axios from "axios";
import { Button } from "../components/Button"; // Custom button component

const AddProduct = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !price || !image) {
      setError("All fields are required.");
      return;
    }

    const product = { name, price, image };

    try {
      // Sending POST request to add the product
      const response = await axios.post("http://localhost:8080/api/products", product);
      
      if (response.status === 201) {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setImage("");
      }
    } catch (err) {
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter product price"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
          />
        </div>
        
        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
