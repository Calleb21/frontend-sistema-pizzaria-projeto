import React from 'react';
import CarrinhoHeader from './FooterAndHeader/CarrinhoHeader'; // Importe o CarrinhoHeader
import './CarrinhoModal.css';

interface CarrinhoModalProps {
  onClose: () => void;
}

const CarrinhoModal: React.FC<CarrinhoModalProps> = ({ onClose }) => {
  return (
    <div className="carrinho-modal">
      <button className="close-btn" onClick={onClose}>
        x
      </button>
      <CarrinhoHeader modalWidth={1100} /> {}
      <h2>Seu Carrinho</h2>
      <p>(Conteúdo do carrinho será exibido aqui)</p>
    </div>
  );
};

export default CarrinhoModal;

