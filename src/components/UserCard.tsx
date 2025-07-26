import React from 'react';
import { useAppContext, User } from '../context/AppContext';
import UserActions from './UserActions.tsx';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { theme } = useAppContext();

  const cardClass = theme.mode === 'dark' ? 'card bg-dark text-white' : 'card bg-light';
  const borderColor = theme.primaryColor === 'orange' ? 'border-warning' : 
    theme.primaryColor === 'green' ? 'border-success' : 
    theme.primaryColor === 'red' ? 'border-danger' : 
    theme.primaryColor === 'softblue' ? 'border-info' : 'border-primary';

  const headerColor = theme.primaryColor === 'orange' ? 'text-warning' : 
    theme.primaryColor === 'green' ? 'text-success' : 
    theme.primaryColor === 'red' ? 'text-danger' : 
    theme.primaryColor === 'softblue' ? 'text-info' : 'text-primary';

  return (
    <div className={`${cardClass} ${borderColor} h-100`}>
      <div className="card-header">
        <h5 className={`card-title mb-0 ${headerColor}`}>{user.name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>ID:</strong> {user.id}
        </p>
        <UserActions userId={user.id} />
      </div>
    </div>
  );
};

export default UserCard;
