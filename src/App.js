import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  
  const [todoList, setTodoList] = React.useState(
    []
    );
  const [isLoading, setIsLoading] = React.useState(true);

const fetchData = async()=>{
  const options = {
    method:'GET',
    headers: {Authorization:
      `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
      }
  };
  
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

  try {
    const response = await fetch (url, options);
    if (!response.ok){
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const todos = data.records.map((todo)=>{
      const newTodo = {
        id:todo.id,
        title:todo.fields.Title,
      }
      return newTodo;
    });
    setTodoList(todos);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }  
}

  React.useEffect(()=> {
    fetchData()
  },[]);
  React.useEffect(()=>{
    if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
}, [todoList, isLoading])
  
  const addTodo = (newTodo)=>{
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id)=>{
    setTodoList(todoList.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {
          <>
            <h1>Todo List</h1>
            <AddTodoForm addTodoForm = {addTodo}/>
            {isLoading ? 
              <p>Loading...</p> :
              <TodoList todoList = {todoList} onRemoveTodo={removeTodo}/>
            }
          </>
        }/>
        <Route path = 'new' element = {<h1>New Todo List</h1>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
