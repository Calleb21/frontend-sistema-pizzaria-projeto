import React from "react";
import { Product } from "../../types/Product";

interface CheckoutComponentProps {
  produtosAdicionados?: Product[];
}

const CheckoutComponent: React.FC<CheckoutComponentProps> = ({
  produtosAdicionados = [],
}) => {
  return (
    <div>
      <div>
        {produtosAdicionados.map((produto, index) => (
          <div key={`${produto.id}-${index}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutComponent;
