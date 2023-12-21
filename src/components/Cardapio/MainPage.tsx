import React from "react";
import ProductList from "./ProductList";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <h1>CARDÁPIO</h1>
      <ProductList />
    </div>
  );
};

export default MainPage;