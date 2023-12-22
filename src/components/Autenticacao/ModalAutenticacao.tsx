import React, { useState } from "react";
import {
  autenticarUsuario,
  cadastrarUsuario,
} from "../../service/Autenticacao";
import "./ModalAutenticacao.css";

interface ModalAuthenticationProps {
  onClose: () => void;
}

const ModalAuthentication: React.FC<ModalAuthenticationProps> = ({
  onClose,
}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleAutenticar = async () => {
    try {
      const resultado = await autenticarUsuario(email, senha);
      setMensagem(`Login concluído: ${resultado.nome}`);
    } catch (error) {
      setMensagem("Opss, senha incorreta, tente novamente");
    }
  };

  const handleCadastrar = async () => {
    try {
      await cadastrarUsuario(nome, email, senha);
      setMensagem("Cadastro concluído");
    } catch (error) {
      setMensagem("Erro ao cadastrar");
    }
  };

  return (
    <div className="modal">
      <button className="close-btn" onClick={onClose}>
        x
      </button>
      <h2>Autenticação</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button className="btn btn-acessar" onClick={handleAutenticar}>
          Acessar
        </button>
        <button className="btn btn-cadastrar" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </div>
      <p>{mensagem}</p>
    </div>
  );
};

export default ModalAuthentication;