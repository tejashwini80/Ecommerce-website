import React from "react";
import { Card } from "../components/Card"; // Import Card component
import {Button} from "../components/Button";

const Home = ({ products }) => {
  return (
    <div className="p-4">
      {/* <h2 className="text-3xl font-bold mb-4">Products</h2> */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="flex-grow">
              <img
                src={`http://localhost:8080/${product.image}`}
                alt={product.name}
                className="w-full h-48 object-cover mb-2 rounded"
              />
            </div>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Button className="w-full mt-4">Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
