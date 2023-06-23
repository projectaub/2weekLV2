import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid'

function App() {


  const initialState = {
    id:uuid(),
    title:"제목",
    contents:"내용",
    isDone:false
  }


  const [todos,setTodos] = useState([initialState])

  const [title,setTitle] = useState("")
  const [contents,setContents] = useState("")

  return (
    <>
      
      <header>헤더입니다.</header>
      <main>
        <form onSubmit={(event)=>{
          event.preventDefault();
          const newTodo = {
            id:uuid(),
            title,
            contents,
            isDone:false
          }
            setTodos([...todos,newTodo])
        }}>
          <input type='text'placeholder='제목입력' value={title} onChange={(event)=>{
          
            setTitle(event.target.value)
          }}/>
          <input type='text'placeholder='내용입력'value={contents} onChange={(event)=>{
          
          setContents(event.target.value)}} />
          <button>추가</button>

          <h2>해야할일</h2>
          {todos.filter((todo)=>{
            return todo.isDone === false
          }).map((todo)=>{
            return(
              <div key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={()=>{
                  const deletedTodos = todos.filter((item)=>{
                    return(item.id !==todo.id)
                  })
                setTodos(deletedTodos)}}>삭제</button>
                <button  onClick={()=>{
                  const newTodos = todos.map((item)=>{
                    if(item.id === todo.id){
                      return {
                        ...item, isDone: !item.isDone,
                      } 
                    } else {
                      return item
                    }                    
                  })
                  setTodos(newTodos);
                }}>완료</button>
              </div>
            )
          })}

            <h2>완료한일</h2>
          {todos.filter((todo)=>{
            return todo.isDone === true
          }).map((todo)=>{
            return(
              <div key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <button onClick={()=>{
                  const deletedTodos = todos.filter((item)=>{
                    return(item.id !==todo.id)
                  })
                setTodos(deletedTodos)}}>삭제</button>
                <button  onClick={()=>{
                  const newTodos = todos.map((item)=>{
                    if(item.id === todo.id){
                      return {
                        ...item, isDone: !item.isDone,
                      } 
                    } else {
                      return item
                    }                    
                  })
                  setTodos(newTodos);
                }}>완료</button>
              </div>
            )
          })}

        </form>

      </main>
      <footer>푸터입니다.</footer>
    
    
    </>
      
    
  );
}

export default App;
