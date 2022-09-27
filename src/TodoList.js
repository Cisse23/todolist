import React from "react";

function TodoList(){
    const [todo, setTodo] = React.useState({
        description: '',
        date: ''
    });
    const [todoList, setTodoList] = React.useState([]);
    
    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    }
    
    const addTodo = (event) => {
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
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {todoList.map((todo, index) => 
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td><button onClick={removeTodo}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;