// authService.js
const API_URL = 'http://26.59.30.148:8080'; // Замените на ваш сервер

// Логин: запрос на сервер для получения JWT
export async function login(username, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Сохранение токена
        return data;
    }
    throw new Error('Login failed');
}

// Регистрация: запрос на сервер для создания пользователя
export async function register(username, password) {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return await response.json();
}

// Проверка наличия токена
export function getToken() {
    return localStorage.getItem('token');
}

// Выход и удаление токена
export function logout() {
    localStorage.removeItem('token');
}
