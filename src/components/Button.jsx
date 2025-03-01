import React from 'react';

export const Button = ({ children, className, onClick, type = 'button' }) => (
  <button
    type={type}
    className={`bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
