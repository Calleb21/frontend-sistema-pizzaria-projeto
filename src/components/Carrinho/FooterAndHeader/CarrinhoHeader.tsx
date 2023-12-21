import React from 'react';
import './CarrinhoHeader.css';
import { ItemCarrinho } from '../../../types/ItemCarrinho';

interface CarrinhoHeaderProps {
  carrinhoItens?: ItemCarrinho[];
  modalWidth?: number; 
}

const CarrinhoHeader: React.FC<CarrinhoHeaderProps> = ({ carrinhoItens = [], modalWidth }) => {
  const totalItens = carrinhoItens.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div className="carrinho-header" style={{ width: modalWidth }}>
      <div className="carrinho-info">
        <p>Total de Itens: {totalItens}</p>
      </div>
    </div>
  );
};

export default CarrinhoHeader;
