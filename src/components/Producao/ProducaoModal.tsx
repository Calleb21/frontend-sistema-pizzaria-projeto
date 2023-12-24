import React, { useState, useEffect } from "react";
import "./ProducaoModal.css";

interface ModalProducaoProps {
  onClose: () => void;
}

const ModalProducao: React.FC<ModalProducaoProps> = ({ onClose }) => {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [numeroSenha, setNumeroSenha] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setEtapaAtual((etapa) => {
        if (etapa < 3) {
          return etapa + 1;
        } else {
          clearInterval(timer);
          return etapa;
        }
      });
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleNumeroSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroSenha(event.target.value);
  };

  return (
    <div className="ModalProducao">
      <div className="ModalProducao-header">
        <span className="ModalClose" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="ModalProducao-content">
        <h2>Produção</h2>
        <div className="linha-producao">
          <div className={`bola bola1 ${etapaAtual >= 1 ? "ativo" : ""}`}></div>
          <div className={`bola bola2 ${etapaAtual >= 2 ? "ativo" : ""}`}></div>
          <div className={`bola bola3 ${etapaAtual >= 3 ? "ativo" : ""}`}></div>
        </div>
        <div className="etapas-producao">
          <div className={`etapa ${etapaAtual >= 1 ? "concluida" : ""}`}>
            Produção
          </div>
          <div className={`etapa ${etapaAtual >= 2 ? "concluida" : ""}`}>
            Retirada
          </div>
          <div
            className={`etapa etapa-final ${
              etapaAtual >= 3 ? "concluida" : ""
            }`}
          >
            Finalizada
          </div>
        </div>
        <div>
          <label htmlFor="numeroSenha">Nº Senha:</label>
          <input
            type="text"
            id="numeroSenha"
            value={numeroSenha || ""}
            onChange={handleNumeroSenhaChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalProducao;
