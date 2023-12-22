import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const CheckoutAlert = ({ message }) => (
  <div
    className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-300 dark:bg-gray-800 dark:text-green-400"
    role="alert"
  >
    <span className="sr-only">Info</span>
    <div>
      <span className="font-medium">{message}</span>
    </div>
  </div>
);

const AddCart = () => {
  const { cart, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [checkoutAlert, setCheckoutAlert] = useState(null);

  useEffect(() => {
    // Initialize cartItems state with quantity property for each item
    const initialCartItems = cart.map((item) => ({
      ...item,
      quantity: 1, // Initial quantity is 1
    }));
    setCartItems(initialCartItems);
  }, [cart]);

  useEffect(() => {
    // Calculate the total when the cartItems change
    const newTotal = cartItems.reduce((acc, item) => {
      return acc + item.id * 10 * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleCheckout = () => {
    setCheckoutAlert("Checkout successful! Thank you for shopping with us.");
  };

  return (
    <div className="bg-gray-500 p-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {checkoutAlert && <CheckoutAlert message={checkoutAlert} />}
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="py-2 border">Image</th>
                <th className="py-2 border">Item Name</th>
                <th className="py-2 border">Quantity</th>
                <th className="py-2 border">Size</th>
                <th className="py-2 border">Price</th>
                <th className="py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="bg-gray-200">
                  <td className="p-4 border">
                    <img
                      className="w-20 h-20 mx-auto rounded-md"
                      src={item.src}
                      alt={`Product ${item.id}`}
                    />
                  </td>
                  <td className="p-4 border text-lg font-semibold">
                    {item.name}
                  </td>
                  <td className="p-4 border">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="w-12 px-2 py-1 border rounded-md"
                    />
                  </td>
                  <td className="p-4 border">
                    {" "}
                    <select
                      value={selectedSize}
                      onChange={handleSizeChange}
                      className="w-16 px-2 py-1 border rounded-md"
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </td>
                  <td className="p-4 border">
                    ${item.id * 10 * item.quantity}
                  </td>
                  <td className="p-4 border">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <p className="text-lg font-semibold mb-2">Total: ${total}</p>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCart;
