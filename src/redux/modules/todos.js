import shortid from "shortid";

// 초기값
const initialState = [
  {
    id: shortid.generate(),
    title: "제목",
    body: "내용",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목",
    body: "내용",
    isDone: false,
  },
];
//리듀서 state actione 을 같는다

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DLELTE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "ISDONE_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export default todos;
