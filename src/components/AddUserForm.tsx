import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AddUserForm: React.FC = () => {
  const { addUser, theme } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      addUser({ name: name.trim(), email: email.trim() });
      setName('');
      setEmail('');
    }
  };

  const cardClass = theme.mode === 'dark' ? 'card bg-dark text-white' : 'card bg-light';
  const borderColor = theme.primaryColor === 'orange' ? 'border-warning' : 
    theme.primaryColor === 'green' ? 'border-success' : 
    theme.primaryColor === 'red' ? 'border-danger' : 
    theme.primaryColor === 'softblue' ? 'border-info' : 'border-primary';

  const headerColor = theme.primaryColor === 'orange' ? 'text-warning' : 
    theme.primaryColor === 'green' ? 'text-success' : 
    theme.primaryColor === 'red' ? 'text-danger' : 
    theme.primaryColor === 'softblue' ? 'text-info' : 'text-primary';

  const getButtonClass = () => {
    switch(theme.primaryColor) {
      case '#28a745': return 'btn-success';
      case '#dc3545': return 'btn-danger';  
      case '#6f42c1': return 'btn-primary';
      case '#fd7e14': return 'btn-warning';
      default: return 'btn-primary';
    }
  };

  return (
    <div className={`${cardClass} ${borderColor} mt-4`}>
      <div className="card-header">
        <h4 className={`mb-0 ${headerColor}`}>
          Додати нового користувача
        </h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Ім'я користувача</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Введіть ім'я користувача"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              placeholder="Введіть email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={`btn ${getButtonClass()}`}> ➕ Додати користувача</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
