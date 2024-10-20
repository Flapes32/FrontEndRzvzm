// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Убедитесь, что этот файл CSS существует

function HomePage() {
  return (
    <div className="container">
      <div className="main-box">
        <div className="header">
          <div className="logo">RAZZVOZZIM</div>
          <div className="buttons">
            <Link to="/registration" className="button">РЕГИСТРАЦИЯ</Link>
            <Link to="/login" className="button">ВХОД</Link>
          </div>
        </div>
        
        <img className="main-image" src="foto5.png" alt="Placeholder" />
        
        <div className="title">Наши преимущества</div>
        
        <div className="advantages-container">
          <div className="advantage-box">
            <div className="advantage-text">Лучшие услуги</div>
          </div>
          <div className="advantage-box">
            <div className="advantage-text">Лучшие сотрудники</div>
          </div>
          <div className="advantage-box">
            <div className="advantage-text">Многолетний опыт на рынке</div>
          </div>
          <div className="advantage-box">
            <div className="advantage-text">Лучшие цены</div>
          </div>
        </div>

        <div className="footer-box">
          <div className="footer-logo">RAZZVOZZIM.by</div>
          <div className="footer-contact">+375299999999<br />whysoserious@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
