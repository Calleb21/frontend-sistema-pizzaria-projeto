import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="icons-container left">
        <FiShoppingCart className="cart-icon" />
      </div>

      <div className="logo-container">
        <img src="src/components/img/BellaNapoli-logo.png" alt="Logo da Pizzaria" />
      </div>

      <div className="icons-container right">
        <FiUser className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
