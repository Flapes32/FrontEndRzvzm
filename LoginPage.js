// src/components/LoginPage.js
import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Вход</h1>
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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
