import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!title || !body) {
          alert("필수값이 누락되었습니다 .확인해주세요");
          return false;
        }

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });
        setTitle("");
        setBody("");
      }}
    >
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
        <button>추가하기</button>
      </div>
    </form>
  );
}

export default Form;
