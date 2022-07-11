import { useRef } from 'react';
import { useState } from 'react';
import './/Todo.css';

function Todo({id, completed, title, removeItem}){
     const[complete, setComplete] = useState(completed);

    function changeBox(e) {        
        setComplete(e.target.checked);
    }

    return(
        <div className="labels">
            <label htmlFor={id}>
                <input type="checkbox" id={id} onChange={changeBox} defaultChecked={completed}/>
                <p className={complete ? "checked" : ""}>{title}</p>
            </label>
            <button onClick={() => {
                removeItem(id);
            }}>Delete</button>
        </div>
    )
}

export default Todo;
