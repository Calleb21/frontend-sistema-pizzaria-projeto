import React from "react";
import { Product } from "../../types/Product";

interface CheckoutComponentProps {
  produtosAdicionados?: Product[];
}

const CheckoutComponent: React.FC<CheckoutComponentProps> = ({ produtosAdicionados = [] }) => {
  return (
    <div>
      <div>
        <h2>Produtos Adicionados</h2>
        {produtosAdicionados.map((produto, index) => (
          <div key={`${produto.id}-${index}`}>
            {produto.nome} - R$ {produto.valor.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutComponent;