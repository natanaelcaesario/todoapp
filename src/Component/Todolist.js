import React from "react";
import Todo from "./Todo";
export default function Todolist({ settodo, todo, filteredtodos }) {
  return (
    <React.Fragment>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredtodos.map((satuan) => (
            // passing
            <Todo
              text={satuan.text}
              key={satuan.id}
              settodo={settodo}
              todo={todo}
              satuan={satuan}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
