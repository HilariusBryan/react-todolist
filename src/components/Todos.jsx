import React from "react";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar props"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar  State React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar props"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar  State React"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
