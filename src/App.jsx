import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductService from "./service"; // Import the service
import AddProduct from "./pages/AddProduct";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]); // State for products

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  // Fetch products using the service
  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data); // Update the products state
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} username={username} />
      
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
