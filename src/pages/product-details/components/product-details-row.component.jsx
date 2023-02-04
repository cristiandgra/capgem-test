import React from "react";
import {
  ProductDetailsTable,
  ProductDetailsTableBody,
} from "../product-details.styles";

export const ProductDetailsTableRows = ({ product }) => {
  return (
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
          <td>CPU:</td>
          <td>{product.CPU}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>{product.RAM}</td>
        </tr>
        <tr>
          <td>SO:</td>
          <td>{product.SO}</td>
        </tr>
        <tr>
          <td>Camera:</td>
          <td>{product.camera}</td>
        </tr>
        <tr>
          <td>Resolution:</td>
          <td>{product.ScreenResolution}</td>
        </tr>

        <tr>
          <td>Dimensions:</td>
          <td>{product.dimensions}</td>
        </tr>
        <tr>
          <td>Battery:</td>
          <td>{product.battery}</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>{product.weight}</td>
        </tr>
      </ProductDetailsTableBody>
    </ProductDetailsTable>
  );
};
