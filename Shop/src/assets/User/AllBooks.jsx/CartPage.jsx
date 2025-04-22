import React, { useContext } from "react";
import { CartContext } from "../AllBooks.jsx/Cartcontext"; // update path if needed
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate()
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,                                           
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16 text-xl text-gray-600">
        Your cart is empty 🛒
      </div>
    );
  }

  const handleNavigate =()=>{
    
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <h2 className="text-2xl font-bold">Total: ₹{totalAmount}</h2>
        <div className="flex gap-3">
        <button 
                  className=" bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 ml-2"

        onClick={()=>navigate('/order')}>Place Order</button>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Clear Cart
        </button>
        </div>
      </div>
    </div>
  );
}
