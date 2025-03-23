import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CategoryPage from "./components/CategoryPage";
// import ItemListingPage from "./components/ItemListingPage";
// import ProductPage from "./components/ProductPage";
// import NotFoundPage from "./components/NotFoundPage";
// import React from "react";
 import HomePage from "./components/HomePage";
// import ProductDetailsPage from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:category" element={<ItemListingPage />} />
        <Route path="categories/:category/:product" element={<ProductPage />} />
        <Route path="categories/:category/:product/details" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;