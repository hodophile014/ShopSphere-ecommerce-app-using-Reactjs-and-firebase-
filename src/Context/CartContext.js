import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const totalAmount = cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0)

  // Add a product to the cart
  const addToCart = (product) => {

    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Update quantity if the product already exists
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new product to cart with an initial quantity
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems,totalAmount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
