import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

import { ProductList } from "./pages/product-list/product-list.page";
import { ProductDetails } from "./pages/product-details/product-details.page";
import { ProductProvider } from "./context/product.context";

const App = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
};

export default App;
