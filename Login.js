import React, { useState } from 'react';
import './login.css';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(''); // Для отображения ошибок от сервера

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};

    if (!login.trim()) {
      newErrors.login = 'Логин не может быть пустым';
    }
    if (!password) {
      newErrors.password = 'Пароль не может быть пустым';
    } else if (password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    setErrors(newErrors);

    // Возвращает true, если ошибок нет
    return Object.keys(newErrors).length === 0;
  };

  // Отправка данных на сервер
  const handleSubmit = async (event) => {
    event.preventDefault(); // Останавливаем перезагрузку страницы

    if (validateForm()) {
      try {
        const response = await fetch('http://26.59.30.148:8080/api/auth/login', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ login, password }),
          credentials: 'include', // Для отправки cookies
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ошибка при входе');
        }

        const data = await response.json();
        console.log('Успешный вход:', data);
        alert('Вы успешно вошли!'); 
      } catch (error) {
        console.error('Ошибка входа:', error);
        setServerError(error.message); // Отобразим ошибку от сервера
      }
    }
  };

  return (
    <div className="container">
      <div className="main-box">
        <div className="header">
          <div className="logo">RAZZVOZZIM</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="title">Логин</div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Введите логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            {errors.login && <div style={{ color: 'red' }}>{errors.login}</div>}
          </div>
          <br />
          <div className="title">Пароль</div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <br />
          {serverError && <div style={{ color: 'red', marginBottom: '10px' }}>{serverError}</div>}
          <div className="login-button">
            <button type="submit" className="login-text">ВОЙТИ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
