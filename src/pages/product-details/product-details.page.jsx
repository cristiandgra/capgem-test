import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/product.context";

import Button from "../../components/button/button.component";

import {
  ProductDetailsContainer,
  ProductDetailsImage,
  ProductDetailsTable,
  ProductDetailsTableBody,
  ProductDetailsSelectContainer,
  ProductDetailsSelect,
  ProductDetailsSelectLabel,
  ProductDetailsSelectOption,
  PriceText,
  PriceContainer,
} from "./product-details.styles";

export const ProductDetails = () => {
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

  return (
    <ProductDetailsContainer>
      <ProductDetailsImage
        src={product.image}
        alt={product.model}
        width={400}
        height={400}
      />
      <div>
        <h2>{product.name}</h2>
        <ProductDetailsTable>
          <ProductDetailsTableBody>
            <tr>
              <td>Brand:</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Model:</td>
              <td>{product.model}</td>
            </tr>
            <tr>
              <td>Decription:</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>CPU</td>
              <td>{product.CPU}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{product.RAM}</td>
            </tr>
            <tr>
              <td>SO</td>
              <td>{product.SO}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{product.camera}</td>
            </tr>
            <tr>
              <td>Screen resolution</td>
              <td>{product.ScreenResolution}</td>
            </tr>
            <tr>
              <td>Screen size</td>
              <td>{product.ScreenSize}</td>
            </tr>
            <tr>
              <td>Screen type</td>
              <td>{product.ScreenType}</td>
            </tr>

            <tr>
              <td>Dimensions</td>
              <td>{product.dimensions}</td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>{product.battery}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{product.weight}</td>
            </tr>
          </ProductDetailsTableBody>
        </ProductDetailsTable>
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
          <Button buttonType="inverted">Add to cart</Button>
        </PriceContainer>
      </div>
    </ProductDetailsContainer>
  );
};
