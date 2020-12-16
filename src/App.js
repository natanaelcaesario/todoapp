import Form from "./Component/Form";
import TodoList from "./Component/Todolist";
import React, { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, settodo] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredtodos, setfilteredtodos] = useState([]);

  useEffect(() => {
    filterhandler();
  }, [todo, status]);

  const filterhandler = () => {
    switch (status) {
      case "completed":
        setfilteredtodos(todo.filter((satuan) => satuan.completed === true));
        break;
      case "uncompleted":
        setfilteredtodos(todo.filter((satuan) => satuan.completed === false));
        break;
      default:
        setfilteredtodos(todo);
        break;
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center" style={{ marginTop: "30%" }}>
        To do App By Natanael
      </h1>
      <Form
        setInputText={setInputText}
        todo={todo}
        settodo={settodo}
        inputText={inputText}
        setstatus={setstatus}
        filteredtodos={filteredtodos}
      />
      <TodoList todo={todo} settodo={settodo} filteredtodos={filteredtodos} />
    </React.Fragment>
  );
}

export default App;
