import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://localhost:8080/api/pizzas/listar";

const ProductService = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(`${API_URL}/produtos`);
    return response.data;
  },
};

export default ProductService;
