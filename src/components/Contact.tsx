import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Contact: React.FC = () => {
  const { theme } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Повідомлення відправлено. Дякуємо, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

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
      <h1 className={`mb-4 ${headerColor}`}>Контакти</h1>
      
      <div className="row">
        <div className="col-lg-6">
          <div className={`card ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-white'} ${borderColor} mb-4 h-100`}>
            <div className="card-header">
              <h3 className={`mb-0 ${headerColor}`}>Зв'яжіться з нами</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">👤 Ім'я:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введіть ваше ім'я"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">📧 Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введіть ваш email"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">💬 Повідомлення:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Введіть ваше повідомлення"
                    required
                  />
                </div>
                <button type="submit" className={`btn btn-primary btn-lg`}>Надіслати повідомлення</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className={`card ${theme.mode === 'dark' ? 'bg-secondary text-white' : 'bg-white'} ${borderColor} h-100`}>
            <div className="card-header">
              <h3 className={`mb-0 ${headerColor}`}>Наші контакти</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6 className="text-muted">📍 Адреса:</h6>
                <p className="mb-0">Київ, вул. Р.Окіпної, 1</p>
              </div>
              
              <div className="mb-3">
                <h6 className="text-muted">📞 Телефон:</h6>
                <p className="mb-0">
                  <a href="tel:+380441234567" className={headerColor.replace('text-', 'text-decoration-none text-')}>+380441234567</a>
                </p>
              </div>
              
              <div className="mb-3">
                <h6 className="text-muted">📧 Email:</h6>
                <p className="mb-0">
                  <a href="mailto:info@gmail.com" className={headerColor.replace('text-', 'text-decoration-none text-')}>info@gmail.com</a>
                </p>
              </div>
              
              <div className="mb-4">
                <h6 className="text-muted">🕐 Години роботи:</h6>
                <p className="mb-0">Понеділок - П'ятниця: 9:00-18:00</p>
                <p className="mb-0">Субота - Неділя: Вихідні</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
