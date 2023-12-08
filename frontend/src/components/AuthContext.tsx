import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
  setError: (error: string) => void;
  completedCommands: Set<number>;
  markCommandAsCompleted: (commandId: number) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('authenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [error, setError] = useState<string | null>(null);
  const [completedCommands, setCompletedCommands] = useState<Set<number>>(new Set());
  const login = () => {
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  const markCommandAsCompleted = (commandId: number) => {
    setCompletedCommands((prevCompletedCommands) => new Set<number>([...Array.from(prevCompletedCommands), commandId]));
  };
  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, login ,logout ,setError, completedCommands, markCommandAsCompleted}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
