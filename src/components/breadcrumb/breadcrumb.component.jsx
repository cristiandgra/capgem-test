import React from "react";

import {
  BreadcrumbContainer,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./breadcrumb.styles";

const Breadcrumb = ({ product }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbLink to="/">Product List</BreadcrumbLink>
      <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
      <BreadcrumbLink id="breadcrumb" to={`/product/${product.id}`}>
        {product.name}
      </BreadcrumbLink>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
