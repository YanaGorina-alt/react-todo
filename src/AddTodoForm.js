import React from 'react';

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
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" value={todoTitle} name="title" onChange={handleTitleChange}></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;