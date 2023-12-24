import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Product } from "../../types/Product";
import CheckoutComponent from "./CheckoutComponent";
import CarrinhoModal from "../Carrinho/CarrinhoModal";
import NotaModal from "../NotaFiscal/NotaModal";
import { getUsuarioLogado } from "../../service/Autenticacao";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [produtosAdicionados, setProdutosAdicionados] = useState<Product[]>([]);
  const [isCarrinhoModalOpen, setIsCarrinhoModalOpen] = useState(false);
  const [isNotaModalOpen, setIsNotaModalOpen] = useState(false);
  const [opcaoPagamento, setOpcaoPagamento] = useState<string>("");

  const [formatadoNotaFiscal, setFormatadoNotaFiscal] = useState<
    {
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
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/pizzas/listar")
      .then((response) => {
        console.log("Response from server:", response.data);
        setProducts(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const formatarConteudoNotaFiscal = () => {
    const usuarioLogado = getUsuarioLogado();

    return produtosAdicionados.map((produto) => ({
      id: produto.id,
      nome: produto.nome,
      quantidade: 1,
      preco: produto.valor,
      ingredientes: produto.ingredientes,
      funcionario: {
        id: String(usuarioLogado?.id || ""),
        nome: usuarioLogado?.nome || "",
      },
      formaPagamento: opcaoPagamento,
    }));
  };

  const adicionarProduto = (produto: Product) => {
    setProdutosAdicionados((prevProdutos) => [...prevProdutos, produto]);
  };

  const removerProduto = (produto: Product) => {
    const indexToRemove = produtosAdicionados.findIndex(
      (p) => p.id === produto.id
    );

    if (indexToRemove !== -1) {
      const updatedProdutosAdicionados = [...produtosAdicionados];
      updatedProdutosAdicionados.splice(indexToRemove, 1);

      setProdutosAdicionados(updatedProdutosAdicionados);
    }
  };

  const abrirCarrinhoModal = () => {
    setIsCarrinhoModalOpen(true);
  };

  const finalizarCarrinho = async () => {
    console.log("Produtos Adicionados:", produtosAdicionados);

    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado) {
      console.error(
        "Usuário não está logado. Não é possível finalizar o carrinho."
      );
      return;
    }

    if (!opcaoPagamento) {
      console.error("Selecione uma opção de pagamento antes de finalizar.");
      return;
    }

    const horario = new Date();

    const json = {
      funcionario: {
        id: usuarioLogado.id,
        nome: usuarioLogado.nome,
      },
      itens: produtosAdicionados.map((produto) => ({
        quantidade: 1,
        pizza: {
          id: produto.id,
        },
      })),
      horario: horario.toISOString(),
      formaPagamento: opcaoPagamento,
    };

    console.log("JSON a ser enviado:", json);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/carrinhos/salvar",
        json
      );

      console.log("Resposta do servidor:", response.data);

      setFormatadoNotaFiscal(formatarConteudoNotaFiscal());

      setProdutosAdicionados([]);
      setIsCarrinhoModalOpen(false);
      setIsNotaModalOpen(true);
    } catch (error) {
      console.error("Erro ao enviar JSON para o backend:", error);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          adicionarProduto={adicionarProduto}
        />
      ))}
      <button
        className="finalizar-button"
        onClick={abrirCarrinhoModal}
        disabled={produtosAdicionados.length === 0}
      >
        CARRINHO
      </button>
      {isCarrinhoModalOpen && (
        <CarrinhoModal
          onClose={() => setIsCarrinhoModalOpen(false)}
          produtosAdicionados={produtosAdicionados}
          onFinalizar={finalizarCarrinho}
          onRemoverProduto={removerProduto}
          opcaoPagamento={opcaoPagamento}
          setOpcaoPagamento={setOpcaoPagamento}
        />
      )}
      {isNotaModalOpen && (
        <NotaModal
          isOpen={isNotaModalOpen}
          onClose={() => setIsNotaModalOpen(false)}
          content={formatadoNotaFiscal}
        />
      )}
      <CheckoutComponent produtosAdicionados={produtosAdicionados} />
    </div>
  );
};

export default ProductList;
