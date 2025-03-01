import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, username }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg relative">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-300">Anusuya.com</Link>
      </h1>
      
      <div className="flex space-x-4 items-center">
        <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={toggleCategories}
            className="text-white  py-2 rounded-lg hover:bg-blue-700 transition duration-300 bg-blue-600"
          >
            Categories
          </button>
          
          {isCategoriesOpen && (
            <div className="absolute  bg-blue-400 text-white rounded-md shadow-lg w-48">
              <Link to="/categories/bridal" className="block px-4 py-2 hover:bg-gray-700">Bridal</Link>
              <Link to="/categories/modern" className="block px-4 py-2 hover:bg-gray-700">Modern</Link>
              <Link to="/categories/trending" className="block px-4 py-2 hover:bg-gray-700">Trending</Link>
              <Link to="/categories/cotton" className="block px-4 py-2 hover:bg-gray-700">Cotton</Link>
              {/* Add more categories here */}
            </div>
          )}
        </div>

        {isAuthenticated && (
          <>
            <Link to="/add-product" className="text-white hover:text-gray-300 transition duration-300">Add Product</Link>
            <Link to="/modify-product" className="text-white hover:text-gray-300 transition duration-300">Modify Product</Link>
            <Link to="/delete-product" className="text-white hover:text-gray-300 transition duration-300">Delete Product</Link>
            <Link to="/get-product" className="text-white hover:text-gray-300 transition duration-300">Get Product</Link>
          </>
        )}
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <span className="text-lg">{username}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 19.875A7.125 7.125 0 0112 16.5a7.125 7.125 0 017.5 3.375"
              />
            </svg>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-700 p-2 rounded-md hover:bg-blue-800 transition duration-300">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
