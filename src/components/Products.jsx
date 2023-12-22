import React from "react";
import { useCart } from "./CartContext";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const Products = () => {
  const { addToCart } = useCart();

  const shoes = [
    {
      id: 1,
      name: "Jordans",
      src: product1,
    },
    {
      id: 2,
      name: "Nike",
      src: product2,
    },
    {
      id: 3,
      name: "Adidas",
      src: product3,
    },
    {
      id: 4,
      name: "Reebok",
      src: product4,
    },
    {
      id: 5,
      name: "Skechers",
      src: product5,
    },
    {
      id: 6,
      name: "Fila",
      src: product6,
    },
    {
      id: 7,
      name: "Puma",
      src: product7,
    },
    {
      id: 8,
      name: "UnderArmour",
      src: product8,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-500 p-8">
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="bg-gray-200 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105"
        >
          <img
            className="w-54 h-48 mx-auto rounded-md mb-4"
            src={shoe.src}
            alt={`Product ${shoe.id}`}
          />
          <h2 className="text-xl font-semibold mb-2">{shoe.name}</h2>
          <p className="text-gray-500">Price: ${shoe.id * 10}</p>
          <button
            onClick={() => handleAddToCart(shoe)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
