import React from "react";
import { Product } from "../../types/Product";
import { adicionarProdutoAoCarrinho } from "../../service/CarrinhoService";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  adicionarProduto: (produto: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, adicionarProduto }) => {
  const handleAdicionarClick = async () => {
    try {
      await adicionarProdutoAoCarrinho(product.id, 1);
      console.log("Produto adicionado ao carrinho com sucesso!");

      adicionarProduto(product);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho", error);
    }
  };

  return (
    <div className="product-card">
      <img src={product.imagem} alt={product.nome} />
      <div className="product-details">
        <div className="text-details">
          <h3>{product.nome}</h3>
          <p>{product.ingredientes}</p>
        </div>
        <div className="price-and-button">
          <p>R$: {product.valor.toFixed(2)}</p>
          <button onClick={handleAdicionarClick}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;