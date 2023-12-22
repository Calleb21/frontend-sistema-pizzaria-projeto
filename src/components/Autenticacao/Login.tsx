import React, { useState } from "react";
import { autenticarUsuario } from "../../service/Autenticacao";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    try {
      const resposta = await autenticarUsuario(email, senha);
      setMensagem(resposta.mensagem);
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao autenticar");
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
};

export default Login;