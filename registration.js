// Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './authService';
import './registration.css';

function Registration() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!login.trim()) newErrors.login = 'Логин не может быть пустым';
        if (!password) newErrors.password = 'Пароль не может быть пустым';
        else if (password.length < 6) newErrors.password = 'Пароль должен быть не менее 6 символов';
        if (confirmPassword !== password) newErrors.confirmPassword = 'Пароли не совпадают';
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Неверный формат E-Mail';
        if (!/^\+?\d{10,12}$/.test(phone)) newErrors.phone = 'Некорректный номер телефона';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                await register(login, password, email, phone);
                alert('Регистрация успешна');
                navigate('/login'); // Перенаправление на страницу входа
            } catch (error) {
                alert('Ошибка при регистрации');
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
                    
                    <div className="title">Повторите пароль</div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Повторите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                    </div>
                    
                    <div className="title">E-Mail</div>
                    <div className="input-box">
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Введите E-Mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    
                    <div className="title">Номер телефона</div>
                    <div className="input-box">
                        <input
                            type="tel"
                            className="input-field"
                            placeholder="Введите номер телефона"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                    </div>
                    
                    <button type="submit" className="register-button">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
