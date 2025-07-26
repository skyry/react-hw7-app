import React from 'react';
import { useAppContext } from '../context/AppContext';

interface UserActionsProps {
  userId: number;
}

const UserActions: React.FC<UserActionsProps> = ({ userId }) => {
  const { theme, users, deleteUser } = useAppContext();

  const user = users.find(u => u.id === userId);

  if (!user) return null;

  const handleViewProfile = () => {
    alert(`Переглядаємо профіль користувача: ${user.name}\nEmail: ${user.email}`);
  };

  const handleDeleteUser = () => {
    if (window.confirm(`Ви впевнені, що хочете видалити користувача "${user.name}"?`)) {
      deleteUser(userId);
    }
  };

  return (
    <div className="mt-2">
      <div className="d-flex flex-wrap gap-1">
        <button 
          className={`btn btn-primary btn-sm`}
          onClick={handleViewProfile}
          title="Переглянути профіль">👤 Профіль
        </button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={handleDeleteUser}
          title="Видалити користувача">🗑️ Видалити
        </button>
      </div>
    </div>
  );
};

export default UserActions;
