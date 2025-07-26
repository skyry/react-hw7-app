import React from 'react';
import { useAppContext } from '../context/AppContext';

const ThemeControls: React.FC = () => {
  const { theme, toggleTheme, updateThemeColor } = useAppContext();

  const cardClass = theme.mode === 'dark' ? 'card bg-dark text-white' : 'card bg-light';
  const borderColor = theme.primaryColor === 'orange' ? 'border-warning' : 
    theme.primaryColor === 'green' ? 'border-success' : 
    theme.primaryColor === 'red' ? 'border-danger' : 
    theme.primaryColor === 'softblue' ? 'border-info' : 'border-primary';

  const headerColor = theme.primaryColor === 'orange' ? 'text-warning' : 
    theme.primaryColor === 'green' ? 'text-success' : 
    theme.primaryColor === 'red' ? 'text-danger' : 
    theme.primaryColor === 'softblue' ? 'text-info' : 'text-primary';

  const colorOptions = [
    { value: 'blue', bootstrap: 'btn-primary', },
    { value: 'green', bootstrap: 'btn-success', },
    { value: 'red', bootstrap: 'btn-danger', },
    { value: 'softblue', bootstrap: 'btn-info',},
    { value: 'orange', bootstrap: 'btn-warning', }
  ];

  return (
    <div className={`${cardClass} ${borderColor} h-100`}>
      <div className="card-header">
        <h4 className={`mb-0 ${headerColor}`}>
          🎨 Налаштування теми
        </h4>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <div className="alert alert-info">
            <strong>Поточний режим:</strong> {theme.mode === 'light' ? '☀️ Світлий' : '🌙 Темний'}
          </div>
          <button 
            className="btn btn-outline-secondary w-100"
            onClick={toggleTheme}
          >
            {theme.mode === 'light' ? 'Перейти на темну тему' : 'Перейти на світлу тему'}
          </button>
        </div>

        <div>
          <h6 className="mb-3">Оберіть колір теми:</h6>
          <div className="d-grid gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                className={`btn ${color.bootstrap} ${theme.primaryColor === color.value ? '' : 'btn-outline-secondary'}`}
                onClick={() => updateThemeColor(color.value)}>
                {theme.primaryColor === color.value ? '✓' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeControls;
