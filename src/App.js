import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Todo from './Todo.jsx';

function App() {
  const[todo, setTodo] = useState([{
    id: '123',
    title: 'Пойти гулять',
    completed: false
  }]);


  let refTodo = React.createRef();
  
  function addPost(event){
    let commentValue = refTodo.current.value;
    setTodo([...todo, {
      id: Date.now().toString(),
      title: commentValue,
      completed: false,
    }]);
    refTodo.current.value = '';
  }

  function removeItem(id) {
    setTodo(todo.filter(item => item.id != id));
  }

  return (
    <div className="App">
      <h1>ToDO</h1>
      <div className="input">
        <input className="main" type='text' id='inputTodo' ref={refTodo}/>
        <button onClick={addPost}>Add</button>
      </div>
      
      <div className='containerTodo'>
        {todo.map((todoItem,index) =>{
          return(
            <Todo {...todoItem} 
            key = {index}
            removeItem = {removeItem}/>
          )
        })}
     
      </div>
    </div>
  );
}

export default App;
