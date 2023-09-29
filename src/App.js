import React from 'react';
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
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item){
          return(
            <li key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
