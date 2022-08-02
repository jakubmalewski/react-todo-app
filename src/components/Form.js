import React, { Component } from "react";

function Form({ setInputText, inputText, todos, setTodos, setSelection }) {
  const inputTextFunc = (evt) => {
    setInputText(evt.target.value);
  };
  const submitTodoFunc = (evt) => {
    const uniqid = require("uniqid");
    evt.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uniqid() }]);
    setInputText("");
  };
  const filterFunc = (evt) => {
    setSelection(evt.target.value);
  };
  return (
    <form className="todo-form">
      <input
        maxLength={150}
        value={inputText}
        onChange={inputTextFunc}
        type="text"
        className="todo-input"
        placeholder="What would you like to add?"
      />
      <button onClick={submitTodoFunc} className="todo-submit">
        +
      </button>
      <div className="select">
        <select onChange={filterFunc} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
