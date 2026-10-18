import React from 'react';
import './TodoItem.css';

// שימוש ב-destructuring לקבלת ה-prop בשם title
function TodoItem({ title }) {
  return (
    <li className="todo-item">
      <span className="todo-bullet"></span>
      <span>{title}</span>
    </li>
  );
}

export default TodoItem;