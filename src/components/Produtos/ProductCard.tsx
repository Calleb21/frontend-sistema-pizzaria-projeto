import React, { useState } from "react";
import { Product } from "../../types/Product";
import { adicionarProdutoAoCarrinho } from "../../service/CarrinhoService";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  adicionarProduto: (produto: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  adicionarProduto,
}) => {
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleAdicionarClick = async () => {
    try {
      await adicionarProdutoAoCarrinho(product.id, 1);
      setMensagem("Produto adicionado ao carrinho com sucesso!");

      adicionarProduto(product);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho", error);
      setMensagem("Erro ao adicionar produto ao carrinho. Tente novamente.");
    }

    setTimeout(() => {
      setMensagem(null);
    }, 900);
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
          {mensagem && <div className="mensagem">{mensagem}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
