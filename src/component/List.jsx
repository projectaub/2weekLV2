import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>해야할일</h2>
        {todos
          .filter((item) => {
            return item.isDone === false;
          })
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DLELTE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "ISDONE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>완료한일</h2>
        {todos
          .filter((item) => {
            return item.isDone === true;
          })
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DLELTE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "ISDONE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
