// В Americaya.js

import React, { useState } from 'react';
import './americaya.css';

function Americaya() {
    const [messages, setMessages] = useState([]);
  
    const handleClick = (event) => {
      if (event.button === 0) { // Проверяем, что нажата левая кнопка мыши
        const x = event.clientX;
        const y = event.clientY;
        const id = Math.random().toString(36).substr(2, 9); // Генерируем уникальный ID
        const message = { id, x, y };
        
        setMessages(prevMessages => [...prevMessages, message]);
  
        // Удаляем сообщение через 5 секунд
        setTimeout(() => {
          setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
        }, 5000);
      }
    };
  
    return (
      <div className="Americaya" onMouseDown={handleClick}>
        {messages.map(message => (
          <div key={message.id} className="haloMessage" style={{ left: `${message.x}px`, top: `${message.y}px` }}>
            HALLO :D
          </div>
        ))}
      </div>
    );
  }
  
  export default Americaya;
  
