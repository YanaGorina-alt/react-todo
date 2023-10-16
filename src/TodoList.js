import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title:"Apply for at least one job position",
    },
    {
      id:2,
      title:"Repeat Anki cards",
    },
    {
      id:3,
      title:"Solve at least one coding problem",
    }
  ];
  
function TodoList (){
    return(
        <ul>
        {todoList.map(function(item){
          return(
            <TodoListItem  key = {item.id} item ={item}/>
          );
        })}
      </ul>
    );
}

export default TodoList;