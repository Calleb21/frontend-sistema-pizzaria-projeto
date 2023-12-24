import axios from "axios";
import { Funcionario } from "../types/AuthTypes";

const baseURL = "http://localhost:8080/api/funcionarios";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let usuarioLogado: Funcionario | null = null;

export const getUsuarioLogado = () => {
  return usuarioLogado;
};

export const setUsuarioLogado = (usuario: Funcionario | null) => {
  usuarioLogado = usuario;
};

export const autenticarUsuario = async (email: string, senha: string) => {
  try {
    const response = await api.post("/autenticar", { email, senha });
    setUsuarioLogado(response.data);
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
    setUsuarioLogado(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao cadastrar");
  }
};
