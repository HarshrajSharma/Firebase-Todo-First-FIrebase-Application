import React from "react"


function TodoItem(props){
    return(
        <div  >

            <p>{props.item}</p>
            <p>{props.index}</p>
            <button>Done</button>
        </div>
    );
}

export default TodoItem;