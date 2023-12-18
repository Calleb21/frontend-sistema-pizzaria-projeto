import React, { useState } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import ModalAuthentication from './Autenticacao/ModalAutenticacao';
import './Header.css';

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="icons-container left">
        <FiShoppingCart className="cart-icon" />
      </div>

      <div className="logo-container">
        <img src="src/img/BellaNapoli-logo.png" alt="Logo da Pizzaria" />
      </div>

      <div className="icons-container right">
        <FiUser className="user-icon" onClick={toggleModal} />
      </div>

      {isModalVisible && <ModalAuthentication onClose={toggleModal} />} {/* Renderiza a modal se isModalVisible for true */}
    </header>
  );
};

export default Header;