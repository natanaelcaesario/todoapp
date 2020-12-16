import React from "react";

export default function Form({
  setInputText,
  todo,
  settodo,
  inputText,
  setstatus,
}) {
  const statusHandler = (e) => {
    setstatus(e.target.value);
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    settodo([
      ...todo,
      {
        text: inputText,
        completed: false,
        id: Math.random(),
      },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        onChange={inputTextHandler}
        className="todo-input"
        value={inputText}
      />

      <button className="tudo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>
    </form>
  );
}
