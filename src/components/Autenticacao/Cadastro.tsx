import React, { useState } from "react";
import { cadastrarUsuario } from "../../service/Autenticacao";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async () => {
    try {
      const resposta = await cadastrarUsuario(nome, email, senha);
      setMensagem(resposta.mensagem);
    } catch (error) {
      setMensagem("Erro ao cadastrar");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
      <p>{mensagem}</p>
    </div>
  );
};

export default Cadastro;
