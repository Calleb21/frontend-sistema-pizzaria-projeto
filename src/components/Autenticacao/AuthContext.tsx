import React, { createContext, useContext, useState, ReactNode } from "react";
import { Funcionario } from "../../types/AuthTypes";

interface AuthContextProps {
  usuarioLogado: Funcionario | null;
  setUsuarioLogado: (usuario: Funcionario | null) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [usuarioLogado, setUsuarioLogado] = useState<Funcionario | null>(null);

  return (
    <AuthContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  console.log("Contexto de autenticação:", context);

  return context;
};
