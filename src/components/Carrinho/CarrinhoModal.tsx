import React from "react";
import CarrinhoHeader from "./FooterAndHeader/CarrinhoHeader";
import "./CarrinhoModal.css";
import { Product } from "../../types/Product";

interface CarrinhoModalProps {
  onClose: () => void;
  produtosAdicionados: Product[];
  onFinalizar: () => void;
  onRemoverProduto?: (produto: Product, quantidade: number) => void;
}

const CarrinhoModal: React.FC<CarrinhoModalProps> = ({
  onClose,
  produtosAdicionados,
  onFinalizar,
  onRemoverProduto,
}) => {
  const calcularPrecoTotal = () => {
    return produtosAdicionados.reduce(
      (total, produto) => total + produto.valor,
      0
    );
  };

  return (
    <div className="carrinho-modal">
      <CarrinhoHeader modalWidth={600} onClose={onClose} />

      <div className="carrinho-content">
        <h2>Carrinho</h2>
        {produtosAdicionados.length === 0 ? (
          <p>(Nenhum produto adicionado)</p>
        ) : (
          <ul className="carrinho-list">
            {produtosAdicionados.map((produto, index) => (
              <li key={index} className="carrinho-item">
                <span>
                  {produto.nome} {produto.ingredientes} - R${" "}
                  {produto.valor.toFixed(2)}
                </span>
                <button
                  className="remover-btn"
                  onClick={() =>
                    onRemoverProduto && onRemoverProduto(produto, 1)
                  }
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <p>Preço Total: R${calcularPrecoTotal().toFixed(2)}</p>

        <div className="opcoes-pagamento">
          <label>
            <input type="radio" name="pagamento" value="dinheiro" />
            Dinheiro
          </label>
          <label>
            <input type="radio" name="pagamento" value="cartao" />
            Cartão
          </label>
          <label>
            <input type="radio" name="pagamento" value="pix" />
            Pix
          </label>
        </div>
      </div>

      <button onClick={onFinalizar}>Finalizar Pedido</button>
    </div>
  );
};

export default CarrinhoModal;
