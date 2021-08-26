import React, { useEffect, useState } from "react";
import firebase from "../Util/Firebase";

import TodoItem from "./TodoItem";

function TodoForm() {
  const [todoItem, setTodo] = useState();
  const [todoArray, setTodoArray]=useState([]);


  //Handle changes in form input
  function handleChange(e) {
    setTodo(e.target.value);
  }

  //Handle form button click
  function handleClick(e) {
    e.preventDefault();
    const todoRef = firebase.database().ref("TodoItems");
    const todo = {
      todoItem,
    };

    todoRef.push(todo);
    setTodo("");
    
  }

  useEffect(()=>{
      const todoRef= firebase.database().ref("TodoItems")
      todoRef.on("value", (snapshot)=>{
          console.log(snapshot.val());
          const todos=snapshot.val();
          const todoList=[];
          for(let id in todos){
            todoList.push(todos[id].todoItem);
          }
          // console.log(todoList)
          setTodoArray(todoList);
          console.log(todoArray);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form>
        <input 
            type="text" 
            onChange={handleChange} 
            value={todoItem} 
            required

        />
        <button onClick={handleClick}>AddItems</button>
      </form>

      <div>
        {todoArray.map((element)=>{
          return(
            <TodoItem
              item={element}
              
            />
          );
        })}
      </div>
    </div>
  );
}
export default TodoForm;
