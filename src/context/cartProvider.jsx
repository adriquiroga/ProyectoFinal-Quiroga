import React, { useState } from "react";
import { cartContext } from "./cartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

 
  const addToCart = (product, qty = 1) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
  };
  
  const removeItem = (id) => {
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const getQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
