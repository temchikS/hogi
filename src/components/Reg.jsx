import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [fio, setFio] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleRegistration = async () => {
        const userData = {
            username: username,
            fio: fio,
            age: parseInt(age),
            password: password
        };

        try {
            const response = await fetch('http://localhost:5228/api/User/RegisterUser/Registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при регистрации');
            }else{
                setLoggedIn(true);
            }

        } catch (error) {
            console.error('Произошла ошибка при выполнении запроса:', error);
        }
    };
    if (loggedIn) {
        return <Navigate to="/welcome" />;
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="ФИО"
                value={fio}
                onChange={(e) => setFio(e.target.value)}
            />
            <input
                type="number"
                placeholder="Возраст"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegistration}>Регистрация</button>
        </div>
    );
}
