// context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipagem para o contexto de autenticação
interface AuthContextData {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Criando o contexto de autenticação com valor inicial undefined
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Provedor de autenticação
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setAuth] = useState(false); // Estado para gerenciar a autenticação

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto de autenticação
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
