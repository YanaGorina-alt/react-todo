import React from 'react';

function AddTodoForm (props){

    const handleAddTodo = (event) => { 
     
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle)
        props.onAddTodo(todoTitle);
        event.target.reset();
        

    }

    return(
        <div>
            <form onSubmit = {handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" name="title"></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;