import React from 'react';
import InpitWithLabel from './InputWithLabel';

function AddTodoForm ({addTodoForm}){

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => { 
     
        event.preventDefault();
        console.log(todoTitle)
        addTodoForm({title: todoTitle, id: Date.now()});
        setTodoTitle("");
        

    }

    return(
        <div>
            <form onSubmit = {handleAddTodo}>
                <InpitWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} >Title: </InpitWithLabel>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;