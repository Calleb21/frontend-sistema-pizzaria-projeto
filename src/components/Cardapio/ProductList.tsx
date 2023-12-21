import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Product } from "../../types/Product";
import CheckoutComponent from "./CheckoutComponent";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [produtosAdicionados, setProdutosAdicionados] = useState<Product[]>([]);

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

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          adicionarProduto={adicionarProduto}
        />
      ))}
      {}
      <button onClick={() => console.log("Produtos Adicionados:", produtosAdicionados)}>
        Finalizar Pedido
      </button>
      <CheckoutComponent />
    </div>
  );
};

export default ProductList;