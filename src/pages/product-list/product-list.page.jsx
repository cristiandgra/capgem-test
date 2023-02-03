import React, { useState, useContext } from "react";

import { ProductContext } from "../../context/product.context";

import SearchInput from "../../components/input-search/input-search.component";
import { ProductCard } from "../../components/product-card/product-card.component";

import {
  ProductListContainer,
  DashboardContainer,
  EmptyProducts,
} from "./product-list.styles";

export const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (filter) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.brand.toLowerCase().includes(filter) ||
          product.model.toLowerCase().includes(filter)
      )
    );
  };

  return (
    <DashboardContainer>
      <SearchInput
        onChange={filterProducts}
        placeholder="Search with brand or model..."
      />
      <ProductListContainer>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyProducts>
            No se encontraron productos con esta marca o modelo
          </EmptyProducts>
        )}
      </ProductListContainer>
    </DashboardContainer>
  );
};
