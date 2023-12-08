import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
  setError: (error: string) => void;
  completedCommands: Set<number>;
  markCommandAsCompleted: (commandId: number) => void;
  setCompletedCommands: React.Dispatch<React.SetStateAction<Set<number>>>;
  completedLessons: Set<number>;
  markLessonAsCompleted: (lessonId: number) => void;
  completedQuizzes: Set<number>;
  markQuizAsCompleted: (quizId: number) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('authenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [error, setError] = useState<string | null>(null);
  const [completedCommands, setCompletedCommands] = useState<Set<number>>(new Set());
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set());
  const login = () => {
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  const markCommandAsCompleted = (commandId: number) => {
    setCompletedCommands((prevCompletedCommands) => new Set<number>([...Array.from(prevCompletedCommands), commandId]));
  };
  const markLessonAsCompleted = (lessonId: number) => {
    setCompletedLessons((prevCompletedLessons) => new Set<number>([...Array.from(prevCompletedLessons), lessonId]));
  };
  const markQuizAsCompleted = (quizId: number) => {
    setCompletedQuizzes((prevCompletedQuizzes) => new Set<number>([...Array.from(prevCompletedQuizzes), quizId]));
  };
  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, login ,logout ,setError, completedCommands,
     markCommandAsCompleted, setCompletedCommands, completedLessons,
     markLessonAsCompleted,
     completedQuizzes,
     markQuizAsCompleted,}}>
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
