export interface ItemCarrinho {
  id: number;
  nome: string;
  valor: number;
  quantidade: number;
}

export interface CarrinhoProps {
  carrinhoItens: ItemCarrinho[];
  onClose: () => void;
  usuarioLogado: Funcionario | null;
}

export interface Funcionario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

  