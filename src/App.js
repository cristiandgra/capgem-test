import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

import { ProductList } from "./pages/ProductList.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<ProductList />} />
      </Route>
    </Routes>
  );
};

export default App;
