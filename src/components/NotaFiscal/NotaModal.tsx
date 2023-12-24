import React, { useEffect, useState } from "react";
import ModalProducao from "./../Producao/ProducaoModal";
import "./NotaModal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
    ingredientes: string;
    funcionario: {
      id: string;
      nome: string;
    };
    formaPagamento: string;
  }[];
}

const NotaModal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState<number | null>(null);
  const [producaoModalAberta, setProducaoModalAberta] = useState(false);

  useEffect(() => {
    const novoNumero = Math.floor(Math.random() * 1000);
    setNumeroAleatorio(novoNumero);
  }, []);

  const handleProduzirClick = () => {
    setProducaoModalAberta(true);
  };

  if (!isOpen) {
    return null;
  }

  const calcularValorTotal = (conteudo: ModalProps["content"]) => {
    return conteudo.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  };

  const formatarConteudoNota = (conteudo: ModalProps["content"]) => {
    const formaPagamento =
      conteudo.length > 0 ? conteudo[0].formaPagamento : "";
    const valorTotal = calcularValorTotal(conteudo);
    const dataAtual = new Date().toLocaleString();

    return (
      <div>
        <h2>BELLA NAPOLI PIZZARIA</h2>
        <h2>Detalhes do Pedido</h2>
        {conteudo.length > 0 && (
          <div>
            <p>
              <strong>Data e Hora:</strong> {dataAtual}
            </p>
          </div>
        )}
        {conteudo.map((item, index) => (
          <div key={`${item.id}-${item.funcionario.id}`}>
            <div>
              <p>
                <strong>Funcionário:</strong> {item.funcionario.nome}
              </p>
              {index < conteudo.length - 1 && <hr />}
            </div>
            <p>
              <strong>Nome:</strong> {item.nome}
            </p>
            <p>
              <strong>Quantidade:</strong> {item.quantidade}
            </p>
            <p>
              <strong>Preço:</strong> {item.preco}
            </p>
            <p>
              <strong>Ingredientes:</strong> {item.ingredientes}
            </p>
          </div>
        ))}
        <hr />
        <p>
          <strong>Valor Total:</strong> {valorTotal}
        </p>
        <p>
          <strong>Forma de Pagamento:</strong> {formaPagamento}
        </p>

        <h2>Senha: {numeroAleatorio}</h2>
        <button className="produzir-button" onClick={handleProduzirClick}>
          Produzir
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="NotaModal" onClick={onClose}>
        <div className="NotaModal-content" onClick={(e) => e.stopPropagation()}>
          <span className="NotaClose" onClick={onClose}>
            &times;
          </span>
          {formatarConteudoNota(content)}
        </div>
      </div>

      {producaoModalAberta && (
        <ModalProducao onClose={() => setProducaoModalAberta(false)} />
      )}
    </>
  );
};

export default NotaModal;
