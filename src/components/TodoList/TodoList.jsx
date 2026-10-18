import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList() {
  // 1. משתנה State לרשימת המשימות - כדי שנוכל לעדכן אותה באופן דינמי
  const [tasks, setTasks] = useState([
    'ללמוד React ו-Hooks',
    'לבצע קומיט מסודר ב-Git',
    'להתקין ולבדוק ב-React DevTools'
  ]);

  // 2. משתנה State לשדה הקלט - שומר את הטקסט שהמשתמש מקליד ברגע נתון
  const [taskInput, setTaskInput] = useState('');

  // 3. משתנה State להצגת הודעת שגיאה אם הקלט לא תקין
  const [error, setError] = useState('');

  // פונקציה שמופעלת בכל שינוי בתיבת הקלט (onChange)
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    // איפוס הודעת השגיאה ברגע שמתחילים להקליד שוב
    if (error) {
      setError('');
    }
  };

  // פונקציה להוספת משימה בעת לחיצה על כפתור האישור / שליחת הטופס
  const handleAddTask = (e) => {
    e.preventDefault(); // מניעת רענון של הדף

    const trimmedTask = taskInput.trim();

    // בדיקה: לא להוסיף משימה ריקה
    if (!trimmedTask) {
      setError('נא להזין תוכן למשימה.');
      return;
    }

    // בדיקה: לא להוסיף משימה שכבר קיימת ברשימה
    const isExist = tasks.some(
      (task) => task.trim().toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isExist) {
      setError('משימה זו כבר מופיעה ברשימה.');
      return;
    }

    // הוספת המשימה למערך באמצעות יצירת מערך חדש (שמירה על Immutability)
    setTasks([...tasks, trimmedTask]);

    // ריקון תיבת הקלט לאחר ההוספה
    setTaskInput('');
    setError('');
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">רשימת משימות</h1>

      {/* טופס קליטת משימה חדשה */}
      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="הוספת משימה חדשה..."
          value={taskInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-submit-btn">
          אישור
        </button>
      </form>

      {/* הצגת שגיאה במידה והקלט שגוי */}
      {error && <div className="error-msg">{error}</div>}

      {/* תצוגת רשימת המשימות */}
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem key={index} title={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;