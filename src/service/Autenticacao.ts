import axios from "axios";

const baseURL = "http://localhost:8080/funcionarios";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const autenticarUsuario = async (email: string, senha: string) => {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao autenticar");
  }
};

export const cadastrarUsuario = async (
  nome: string,
  email: string,
  senha: string
) => {
  try {
    const response = await api.post("/cadastrar", { nome, email, senha });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao cadastrar");
  }
};
