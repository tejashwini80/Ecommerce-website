import React from "react";

export const Card = ({ children }) => (
  <div className="card p-4 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">
    {children}
  </div>
);
