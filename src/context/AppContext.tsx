import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
}

export interface AppContextType {
  users: User[];
  theme: Theme;
  addUser: (user: Omit<User, 'id'>) => void;
  deleteUser: (userId: number) => void;
  toggleTheme: () => void;
  updateThemeColor: (color: string) => void;
}

const AppContext = createContext<AppContextType>({
  users: [
    { id: 1, name: 'Іван Петренко', email: 'ivan_petrenko@gmail.com' },
    { id: 2, name: 'Марія Петренко', email: 'maria_petrenko@gmail.com' }
  ],
  theme: {
    mode: 'light',
    primaryColor: '#007bff'
  },
  addUser: () => {},
  deleteUser: () => {},
  toggleTheme: () => {},
  updateThemeColor: () => {}
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Іван Петренко', email: 'ivan_petrenko@gmail.com' },
    { id: 2, name: 'Марія Петренко', email: 'maria_petrenko@gmail.com' },
  ]);

  const [theme, setTheme] = useState<Theme>({
    mode: 'light',
    primaryColor: '#007bff'
  });

  const addUser = (newUser: Omit<User, 'id'>) => {
    let newId: number;
    do {
      newId = Math.floor(Math.random() * 1000000) + 1;
    } while (users.some(user => user.id === newId));

    const user: User = {
      ...newUser,
      id: newId
    };
    setUsers(prev => [...prev, user]);
  };

  const deleteUser = (userId: number) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const toggleTheme = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  };

  const updateThemeColor = (color: string) => {
    setTheme(prev => ({
      ...prev,
      primaryColor: color
    }));
  };

  const contextValue: AppContextType = {
    users,
    theme,
    addUser,
    deleteUser,
    toggleTheme,
    updateThemeColor
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
