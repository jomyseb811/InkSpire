import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("hsgfsh",cartItems);
  
  const userId = localStorage.getItem("loggedUserId");
  console.log("userid",userId);
  

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3000/user/${userId}`)
        .then(res => setCartItems(res.data.cart || []))
        .catch(err => console.log("Failed to fetch cart", err));
    }
  }, [userId]);

  const updateUserCart = async (updatedCart) => {
    await axios.patch(`http://localhost:3000/user/${userId}`, { cart: updatedCart });
    setCartItems(updatedCart);
  };

  const addToCart = async (book) => {
    console.log("User ID used in addToCart:", userId);

    try {
      const res = await axios.get(`http://localhost:3000/user/${userId}`);
      const currentCart = res.data.cart || [];
      const exists = currentCart.find(item => item.id === book.id);
  
      let updatedCart;
      if (exists) {
        updatedCart = currentCart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        toast.success("Item quantity increased");
      } else {
        const newItem = { ...book, quantity: 1 };
        updatedCart = [...currentCart, newItem];
        toast.success("Item added to cart");
      }
  
      await axios.patch(`http://localhost:3000/user/${userId}`, { cart: updatedCart });
      setCartItems(updatedCart);
    // await updateUserCart(updatedCart)
    } catch (err) {
      console.error("Failed to add to cart:", err);
      toast.error("Error adding to cart");
    }
  };
  

  const increaseQuantity = async (bookId) => {
    const updatedCart = cartItems.map(item =>
      item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
    );
    await updateUserCart(updatedCart);
  };

  const decreaseQuantity = async (bookId) => {
    const updatedCart = cartItems
      .map(item =>
        item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0); // Remove if quantity becomes 0
    await updateUserCart(updatedCart);
  };

  const removeFromCart = async (bookId) => {
    const updatedCart = cartItems.filter(item => item.id !== bookId);
    await updateUserCart(updatedCart);
  };

  const clearCart = async () => {
    await updateUserCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
