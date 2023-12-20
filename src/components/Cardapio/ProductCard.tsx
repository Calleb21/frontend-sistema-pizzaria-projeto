import React from "react";
import { Product } from "../../types/Product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

