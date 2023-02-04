import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartItemContainer,
  ItemDetails,
  RemoveButton,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <CartItemContainer>
      <ItemDetails>
        <span>Id: {cartItem.id}</span>
        <span>Storage: {cartItem.storage}</span>
        <span>Color: {cartItem.color}</span>
        <span>Quantity: {cartItem.quantity}</span>
      </ItemDetails>
      <RemoveButton onClick={() => removeItem(cartItem)}>X</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
