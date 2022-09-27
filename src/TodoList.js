import React from "react";
import TodoTable from "./TodoTable";

function TodoList(){
    const [todo, setTodo] = React.useState({
        description: 'Get started',
        date: 'today'
    });
    const [todoList, setTodoList] = React.useState([]);
    
    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    }
    
    const addTodo = (event) => {
        event.preventDefault();
        setTodoList([todo, ...todoList]);
    }

    
    const removeTodo = (event) => {
        console.log("delete " + todo.description);
        setTodoList(todoList.filter((todo, i) => i !== event.target.value));
    }
   
    return(
        <div>
            <h1>Simple Todo list</h1>
            Description: <input type="text" name="description" onChange={inputChanged} value={todo.description} />      
            Date: <input type="text" name="date" onChange={inputChanged} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <hr />
            < TodoTable todos={todoList} removeTodo={removeTodo} />
        </div>
    );
}

export default TodoList;