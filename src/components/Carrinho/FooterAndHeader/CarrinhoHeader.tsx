import React from 'react';
import './CarrinhoHeader.css';

interface CarrinhoHeaderProps {
  modalWidth: number;
}

const CarrinhoHeader: React.FC<CarrinhoHeaderProps> = ({ modalWidth }) => {
  return (
    <div className="carrinho-header" style={{ width: modalWidth }}>
      <img
        src="src/img/BellaNapoli-logo.png"
        alt="Logo da Pizzaria"
        className="logo"
      />
    </div>
  );
};

export default CarrinhoHeader;
