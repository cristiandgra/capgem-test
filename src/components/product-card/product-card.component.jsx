/* eslint-disable no-undef */
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductCardContainer } from "./product-card.styles";
import { ImageSelector } from "../utils/ImageSelector";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <ProductCardContainer onClick={() => handleClick(product.id)}>
      <img
        src={ImageSelector(product)}
        alt={product.model}
        width={120}
        height={120}
      />
      <h2>{product.name}</h2>
      <div>
        <p>
          Brand: <b>{product.brand}</b>
        </p>
        <p>
          Model: <b>{product.model}</b>
        </p>
        <p>
          Price: <b>{product.price}$</b>
        </p>
      </div>
    </ProductCardContainer>
  );
};
