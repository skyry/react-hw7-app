import React from 'react';
import { useAppContext } from '../context/AppContext';
import UserCard from './UserCard.tsx';
import AddUserForm from './AddUserForm.tsx';

const UserList: React.FC = () => {
  const { users, theme, deleteUser } = useAppContext();

  const getThemeColorClass = () => {
    switch(theme.primaryColor) {
      case 'green': return 'text-success';
      case 'red': return 'text-danger';  
      case 'softblue': return 'text-info';
      case 'orange': return 'text-warning';
      default: return 'text-primary';
    }
  };

  const handleClearAllUsers = () => {
    if (users.length === 0) return;
    
    if (window.confirm(`Ви впевнені, що хочете видалити всіх ${users.length} користувачів?`)) {
      users.forEach(user => deleteUser(user.id));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className={`mb-0 ${getThemeColorClass()}`}>Список користувачів</h2>
        {users.length > 0 && (
          <button 
            className="btn btn-outline-danger btn-sm"
            onClick={handleClearAllUsers}
            title="Видалити всіх користувачів">🗑️ Видалити всіх користувачів
          </button>
        )}
      </div>
      
      <div className="alert alert-info">
        <strong>Загальна кількість користувачів:</strong> {users.length}
      </div>
      
      {users.length === 0 ? (
        <div className="alert alert-warning text-center">
          <h4>📭 Список користувачів порожній</h4>
          <p>Додайте першого користувача за допомогою форми нижче!</p>
        </div>
      ) : (
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-md-6 mb-3">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
      
      <AddUserForm />
    </div>
  );
};

export default UserList;
