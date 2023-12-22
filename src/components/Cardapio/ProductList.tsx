// ProductList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "../../types/Product";
import CheckoutComponent from "./CheckoutComponent";
import CarrinhoModal from "../Carrinho/CarrinhoModal";  // Corrigir o caminho de importação
import { getUsuarioLogado } from "../../service/Autenticacao";
import './ProductList.css';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [produtosAdicionados, setProdutosAdicionados] = useState<Product[]>([]);
  const [isCarrinhoModalOpen, setIsCarrinhoModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/pizzas/listar")
      .then((response) => {
        console.log("Response from server:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const adicionarProduto = (produto: Product) => {
    setProdutosAdicionados((prevProdutos) => [...prevProdutos, produto]);
  };

  const finalizarCarrinho = async () => {
    console.log("Produtos Adicionados:", produtosAdicionados);

    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado) {
      console.error("Usuário não está logado. Não é possível finalizar o carrinho.");
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

    try {
      const response = await axios.post("http://localhost:8080/api/carrinhos/salvar", json);

      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar JSON para o backend:", error);
    }

    setIsCarrinhoModalOpen(true);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          adicionarProduto={adicionarProduto}
        />
      ))}
      <button
        className="finalizar-button"
        onClick={() => finalizarCarrinho()}
        disabled={produtosAdicionados.length === 0}
      >
        Finalizar Pedido
      </button>
      {isCarrinhoModalOpen && (
        <CarrinhoModal
          onClose={() => setIsCarrinhoModalOpen(false)}
          produtosAdicionados={produtosAdicionados}
          onFinalizar={() => setIsCarrinhoModalOpen(false)}
        />
      )}
      <CheckoutComponent produtosAdicionados={produtosAdicionados} />
    </div>
  );
};

export default ProductList;
