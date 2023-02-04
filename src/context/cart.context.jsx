import React, { createContext, useState, useEffect, useMemo } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const expirationTime = Date.now() + 3600 * 1000;
    localStorage.setItem("expirationTime", expirationTime);
  }, [cart]);

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    if (expirationTime && Date.now() > expirationTime) {
      localStorage.removeItem("cart");
      localStorage.removeItem("expirationTime");
      setCart([]);
    }
  }, []);

  const addItem = (item) => {
    const existingProduct = cart.find(
      (product) =>
        product.id === item.id &&
        product.storage === item.storage &&
        product.color === item.color
    );
    if (existingProduct) {
      setCart(
        cart.map((product) =>
          product.id === item.id &&
          product.storage === item.storage &&
          product.color === item.color
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const existingProduct = cart.find(
      (product) =>
        product.id === item.id &&
        product.storage === item.storage &&
        product.color === item.color
    );
    if (existingProduct.quantity === 1) {
      setCart(
        cart.filter(
          (product) =>
            !(
              product.id === item.id &&
              product.storage === item.storage &&
              product.color === item.color
            )
        )
      );
    } else {
      setCart(
        cart.map((product) =>
          product.id === item.id &&
          product.storage === item.storage &&
          product.color === item.color
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const value = useMemo(
    () => ({ cart, addItem, removeItem }),
    [cart, addItem, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
