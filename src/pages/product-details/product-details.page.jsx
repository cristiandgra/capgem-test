import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/product.context";
import { CartContext } from "../../context/cart.context";

import Button from "../../components/button/button.component";

import { ProductDetailsTableRows } from "./components/product-details-row.component";

import {
  ProductDetailsContainer,
  ProductDetailsImage,
  ProductDetailsSelectContainer,
  ProductDetailsSelect,
  ProductDetailsSelectLabel,
  ProductDetailsSelectOption,
  PriceText,
  PriceContainer,
} from "./product-details.styles";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component";

export const ProductDetails = () => {
  const { addItem } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [price, setPrice] = useState(product.storage[0].price);

  const handleStorageChange = (e) => {
    const selected = product.storage.find(
      (storage) => storage.size === parseInt(e.target.value)
    );
    setSelectedStorage(selected);
    setPrice(selected.price);
  };

  const handleColorChange = (e) => {
    const selected = product.colors.find(
      (color) => color.name === e.target.value
    );
    setSelectedColor(selected);
  };

  const addToCart = () => {
    addItem({
      id: product.id,
      color: selectedColor.name,
      storage: selectedStorage.size,
    });
  };

  return (
    <>
      <div>
        <Breadcrumb product={product} />
      </div>
      <ProductDetailsContainer>
        <ProductDetailsImage
          src={product.image}
          alt={product.model}
          width={400}
          height={400}
        />
        <div>
          <h2>{product.name}</h2>
          <ProductDetailsTableRows product={product} />

          <ProductDetailsSelectContainer>
            <ProductDetailsSelectLabel>Color:</ProductDetailsSelectLabel>
            <ProductDetailsSelect
              value={selectedColor.name}
              onChange={handleColorChange}
              style={{ backgroundColor: selectedColor.code }}
            >
              {product.colors.map((color) => (
                <ProductDetailsSelectOption key={color.name} value={color.name}>
                  {color.name}
                </ProductDetailsSelectOption>
              ))}
            </ProductDetailsSelect>
            <ProductDetailsSelectLabel>Storage:</ProductDetailsSelectLabel>
            <ProductDetailsSelect
              value={selectedStorage.size}
              onChange={handleStorageChange}
            >
              {product.storage.map((storage) => (
                <ProductDetailsSelectOption
                  key={storage.size}
                  value={storage.size}
                >
                  {storage.size} GB
                </ProductDetailsSelectOption>
              ))}
            </ProductDetailsSelect>
          </ProductDetailsSelectContainer>
          <PriceContainer>
            <PriceText>
              <b>Price:</b> ${price}
            </PriceText>
            <Button buttonType="inverted" onClick={addToCart}>
              Add to cart
            </Button>
          </PriceContainer>
        </div>
      </ProductDetailsContainer>
    </>
  );
};
