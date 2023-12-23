import React from "react";
import "./CarrinhoHeader.css";
import { ItemCarrinho } from "../../../types/ItemCarrinho";

interface CarrinhoHeaderProps {
  carrinhoItens?: ItemCarrinho[];
  modalWidth?: number;
  onClose: () => void; 
}

const CarrinhoHeader: React.FC<CarrinhoHeaderProps> = ({ modalWidth, onClose }) => {
  return (
    <div className="carrinho-header" style={{ width: modalWidth }}>
      <div className="carrinho-info">
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default CarrinhoHeader;
