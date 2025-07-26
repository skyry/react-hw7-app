import React from 'react';
import { useAppContext } from '../context/AppContext';
import UserList from './UserList.tsx';
import ThemeControls from './ThemeControls.tsx';

const Home: React.FC = () => {
  const { theme } = useAppContext();

  const bgClass = theme.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  const borderColor = `border-3 border-${theme.primaryColor === 'orange' ? 'warning' : 
    theme.primaryColor === 'green' ? 'success' : 
    theme.primaryColor === 'red' ? 'danger' : 
    theme.primaryColor === 'softblue' ? 'info' : 'primary'}`;

  return (
    <div className={`${bgClass} ${borderColor} rounded p-4 mb-4`} style={{ minHeight: '400px' }}>
      <h1 className={`mb-4 text-${theme.primaryColor === 'orange' ? 'warning' : 
        theme.primaryColor === 'green' ? 'success' : 
        theme.primaryColor === 'red' ? 'danger' : 
        theme.primaryColor === 'softblue' ? 'info' : 'primary'}`}>
        Головна сторінка
      </h1>
      <p className="lead">Ласкаво просимо до додатку React Home Work 7 App!</p>
      
      <div className="row">
        <div className="col-lg-8">
          <UserList />
        </div>
        <div className="col-lg-4">
          <ThemeControls />
        </div>
      </div>
    </div>
  );
};

export default Home;
