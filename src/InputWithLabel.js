import React from "react";

function InpitWithLabel (props) {

    const inputRef = React.useRef();

    React.useEffect(()=>{
        inputRef.current.focus();
    });
    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            <input id="todoTitle" value={props.todoTitle} name="title" onChange={props.handleTitleChange } ref={inputRef} ></input>
        </>
    );
}
export default InpitWithLabel;