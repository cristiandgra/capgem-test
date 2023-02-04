import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cart.length ? (
          cart.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
