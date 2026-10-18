import React from 'react';
import './TodoList.css';

function TodoList() {
  // הגדרת מערך מקומי המכיל לפחות 3 מחרוזות של משימות
  const initialTasks = [
    'ללמוד React ו-Hooks',
    'לבצע קומיט מסודר ב-Git',
    'להתקין ולבדוק ב-React DevTools'
  ];

  return (
    <div className="todo-container">
      <h1 className="todo-title">רשימת משימות</h1>
      
      <ul className="todo-list">
        {/* מעבר בלולאת map על כל משימה והצגתה כאלמנט ברשימה */}
        {initialTasks.map((task, index) => (
          <li key={index} className="todo-item-basic">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;