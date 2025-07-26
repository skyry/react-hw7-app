import React from 'react';
import { useAppContext } from '../context/AppContext';

const About: React.FC = () => {
  const { theme, users } = useAppContext();

  const bgClass = theme.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  const borderColor = `border-3 border-${theme.primaryColor === 'orange' ? 'warning' : 
    theme.primaryColor === 'green' ? 'success' : 
    theme.primaryColor === 'red' ? 'danger' : 
    theme.primaryColor === 'softblue' ? 'info' : 'primary'}`;

  const headerColor = theme.primaryColor === 'orange' ? 'text-warning' : 
    theme.primaryColor === 'green' ? 'text-success' : 
    theme.primaryColor === 'red' ? 'text-danger' : 
    theme.primaryColor === 'softblue' ? 'text-info' : 'text-primary';

  return (
    <div className={`${bgClass} ${borderColor} rounded p-4 mb-4`} style={{ minHeight: '400px' }}>
      <h1 className={`mb-4 ${headerColor}`}>📖 Про нас</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-4">
            <p className="lead">
              Цей проект демонструє використання React Context у багаторівневій архітектурі компонентів.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className={`mb-3 ${headerColor}`}>✨ Особливості проекту:</h3>
            <ul className="list-group list-group-flush">
              <li className={`list-group-item ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-light'}`}>
                ⚡ Використання TypeScript для типізації
              </li>
              <li className={`list-group-item ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-light'}`}>
                👥 Управління списком користувачів через контекст
              </li>
              <li className={`list-group-item ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-light'}`}>
                🎨 Система тем з можливістю зміни режиму та кольорів
              </li>
              <li className={`list-group-item ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-light'}`}>
                🏗️ Компоненти з 3-ма рівнями вкладеності
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className={`mb-3 ${headerColor}`}>🏛️ Архітектура компонентів:</h3>
            <div className={`alert ${theme.mode === 'dark' ? 'alert-secondary' : 'alert-info'}`}>
              <pre className="mb-0" style={{ fontFamily: 'monospace', fontSize: '14px' }}>
                📁 Home (1-й рівень)<br/>
                ├── 📄 UserList (2-й рівень)<br/>
                │   ├── 📄 UserCard (3-й рівень)<br/>
                │   │   └── 📄 UserActions (4-й рівень)<br/>
                │   └── 📄 AddUserForm (3-й рівень)<br/>
                └── 📄 ThemeControls (2-й рівень)
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
