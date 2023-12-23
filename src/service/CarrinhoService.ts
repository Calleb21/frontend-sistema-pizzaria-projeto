import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const adicionarProdutoAoCarrinho = async (
  produtoId: number,
  quantidade: number
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/itens-carrinho/salvar`, {
      produtoId,
      quantidade,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar produto ao carrinho", error);
    throw error;
  }
};
