// src/components/RegistrationPage.js
import React from 'react';

function RegistrationPage() {
  return (
    <div>
      <h1>Регистрация</h1>
      <form>
        <label>
          Логин:
          <input type="text" name="login" />
        </label>
        <br />
        <label>
          Пароль:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Повторите пароль:
          <input type="password" name="confirmPassword" />
        </label>
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
