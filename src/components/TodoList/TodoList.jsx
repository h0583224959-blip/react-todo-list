import React from 'react';
import TodoItem from '../TodoItem/TodoItem'; // ייבוא הקומפוננטה מהתיקייה הסמוכה
import './TodoList.css';

function TodoList() {
  const initialTasks = [
    'ללמוד React ו-Hooks',
    'לבצע קומיט מסודר ב-Git',
    'להתקין ולבדוק ב-React DevTools'
  ];

  return (
    <div className="todo-container">
      <h1 className="todo-title">רשימת משימות</h1>
      
      <ul className="todo-list">
        {/* שימוש בקומפוננטת TodoItem והעברת המשימה דרך prop בשם title */}
        {initialTasks.map((task, index) => (
          <TodoItem key={index} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;