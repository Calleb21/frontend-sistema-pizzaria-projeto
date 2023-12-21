import React, { useState } from "react";
import { Product } from "../../types/Product";
import { useAuth } from "../Autenticacao/AuthContext";

const CheckoutComponent: React.FC = () => {
  const { usuarioLogado } = useAuth();
  const [produtosAdicionados] = useState<Product[]>([]);

  const finalizarCarrinho = () => {
    if (!usuarioLogado) {
      console.error(
        "Usuário não está logado. Não é possível finalizar o carrinho."
      );
      return;
    }

    const json = {
      funcionario: {
        id: usuarioLogado.id,
      },
      itens: produtosAdicionados.map((produto) => ({
        quantidade: 1,
        pizza: {
          id: produto.id,
        },
      })),
    };

    console.log("JSON a ser enviado:", json);
    // Aqui você poderia chamar o serviço que envia o JSON para o backend
  };

  return (
    <div>
      <div>
        <h2>Produtos Adicionados</h2>
        {produtosAdicionados.map((produto) => (
          <div key={produto.id}>
            {produto.nome} - R$ {produto.valor.toFixed(2)}
          </div>
        ))}
      </div>
      <button onClick={finalizarCarrinho}>Finalizar Pedido</button>
    </div>
  );
};

export default CheckoutComponent;
