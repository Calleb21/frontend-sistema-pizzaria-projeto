import axios from "axios";
import { Product } from "../types/Product";

const API_BASE_URL = "http://localhost:8080/api";

export const adicionarProdutoAoCarrinho = async (produto: Product) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/itens-carrinho/salvar`,
      {
        produtoId: produto.id,
        quantidade: 10,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar produto ao carrinho", error);
    throw error;
  }
};
