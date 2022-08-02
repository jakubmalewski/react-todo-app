import React, { Component } from "react";
import garbagePng from "../images/garbage.png";
import checkPng from "../images/check.svg";
import uncheckPng from "../images/uncheck.svg";

function Todo({ text, todo, todos, setTodos }) {
  const deleteFunc = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };
  const completeFunc = () => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === todo.id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };
  const counter = () => {
    for (let i = 1; i < todos.length; i++) {
      return i;
    }
  };
  return (
    <div className="todo">
      <li className={todo.completed ? "checked" : "todo-item"}>{text}</li>
      <button onClick={completeFunc} className="item-check">
        <img src={todo.completed ? checkPng : uncheckPng} alt="check/uncheck" />
      </button>
      <button onClick={deleteFunc} className="item-delete">
        <img src={garbagePng} alt="trash" />
      </button>
    </div>
  );
}

export default Todo;
