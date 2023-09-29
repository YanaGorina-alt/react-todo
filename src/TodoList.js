import React from "react";

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
            <li key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    );
}

export default TodoList;