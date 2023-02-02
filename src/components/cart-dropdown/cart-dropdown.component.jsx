import React from "react";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItems>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
