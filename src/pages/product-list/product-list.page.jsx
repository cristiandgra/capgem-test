import React, { useState } from "react";
import SearchInput from "../../components/input-search/input-search.component";

import { ProductListContainer, ProductCard } from "./product-list.styles";
import DB from "../../data.json";

const products = DB;

export const ProductList = () => {
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
    <div>
      <SearchInput
        onChange={filterProducts}
        placeholder="Search with brand or model..."
      />
      <ProductListContainer>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img
                src={product.image}
                alt={product.model}
                width={120}
                height={120}
              />
              <h2>{product.name}</h2>
              <div>
                <p>
                  Model: <b>{product.model}</b>
                </p>
                <p>
                  Price: <b>{product.price}$</b>
                </p>
              </div>
            </ProductCard>
          ))
        ) : (
          <p>No se encontraron productos con ese texto</p>
        )}
      </ProductListContainer>
    </div>
  );
};
