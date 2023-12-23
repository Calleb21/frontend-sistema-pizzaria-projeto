import React, {} from "react";
import { FiUser } from "react-icons/fi";
import ModalAuthentication from "../Autenticacao/ModalAutenticacao";
import CarrinhoModal from "../Carrinho/CarrinhoModal";
import { getUsuarioLogado } from "../../service/Autenticacao";
import "./Header.css";

const Header: React.FC = () => {
  const [isAutenticacaoModalVisible, setIsAutenticacaoModalVisible] = React.useState(false);
  const [isCarrinhoModalVisible, setIsCarrinhoModalVisible] = React.useState(false);
  const usuarioLogado = getUsuarioLogado();

  const toggleAutenticacaoModal = () => {
    setIsAutenticacaoModalVisible((prev) => !prev);
  };

  const toggleCarrinhoModal = () => {
    setIsCarrinhoModalVisible((prev) => !prev);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="src/img/BellaNapoli-logo.png" alt="Logo da Pizzaria" />
      </div>

      <div className="icons-container right">
        {usuarioLogado ? (
          <div
            className="user-icon"
            onClick={toggleAutenticacaoModal}
            style={{
              background: getRandomColor(),
              borderRadius: '50%',
              padding: '10px',
              fontWeight: 'bold',
            }}
          >
            {usuarioLogado.nome.charAt(0)}
          </div>
        ) : (
          <FiUser className="user-icon" onClick={toggleAutenticacaoModal} />
        )}
      </div>

      {isAutenticacaoModalVisible && <ModalAuthentication onClose={toggleAutenticacaoModal} />}
      {isCarrinhoModalVisible && (
        <CarrinhoModal
          onClose={toggleCarrinhoModal}
          produtosAdicionados={[]}
          onFinalizar={() => setIsCarrinhoModalVisible(false)}
        />
      )}
    </header>
  );
};

export default Header;
