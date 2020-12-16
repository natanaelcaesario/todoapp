import React from "react";

export default function Todo({ todo, settodo, text, satuan }) {
  // complete function
  const completeHandler = () => {
    settodo(
      todo.map((item) => {
        if (item.id === satuan.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  // delete
  const DeleteHandler = () => {
    settodo(todo.filter((el) => el.id !== satuan.id));
  };
  return (
    <div className="todo">
      <li
        // adding class to it
        className={`todo-item 
      ${satuan.completed ? "completed" : ""}`}
      >
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={DeleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
