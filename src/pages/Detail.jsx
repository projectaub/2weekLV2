import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const naviGate = useNavigate();
  const todos = useSelector((state) => {
    return state.todos;
  });

  const todo = todos.filter((todo) => todo.id === id)[0];
  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <p>{todo.isDone.toString()}</p>
      <button
        onClick={() => {
          naviGate("/");
        }}
      >
        이전화면으로
      </button>
    </div>
  );
}

export default Detail;
