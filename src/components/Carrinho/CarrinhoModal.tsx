import React from 'react';
import CarrinhoHeader from './FooterAndHeader/CarrinhoHeader'; 
import './CarrinhoModal.css';
import { Product } from '../../types/Product';

interface CarrinhoModalProps {
  onClose: () => void;
  produtosAdicionados: Product[];
  onFinalizar: () => void;
}

const CarrinhoModal: React.FC<CarrinhoModalProps> = ({ onClose, produtosAdicionados, onFinalizar }) => {
  return (
    <div className="carrinho-modal">
      <button className="close-btn" onClick={onClose}>
        x
      </button>
      <CarrinhoHeader modalWidth={1100} />
      <h2>Seu Carrinho</h2>
      {produtosAdicionados.length === 0 ? (
        <p>(Nenhum produto adicionado)</p>
      ) : (
        <ul>
          {produtosAdicionados.map((produto, index) => (
            <li key={index}>
              {produto.nome} - R$ {produto.valor.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <button onClick={onFinalizar}>Finalizar Pedido</button>
    </div>
  );
};

export default CarrinhoModal;