import React, { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount id="itemCount">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
