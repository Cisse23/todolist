import React, { useState, useRef } from "react";
//import TodoTable from "./TodoTable";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css'; //löytyy bootstrap, material-design tai alpine teema

function TodoList(){
    const [todo, setTodo] = React.useState({
        description: 'Get started',
        date: '', 
        priority: 'medium'
    });
    const [todoList, setTodoList] = React.useState([]);
    
    const gridRef = useRef(); //React hook funktio
    
    const [columnDefs] = useState([
        {field: 'description', sortable: true, filter: true, floatingFilter: true},
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === 'high' ? {color: 'red'} : {color: 'black'}}
    ]);
    
    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name] : event.target.value});
    }
    
    const addTodo = (event) => {
        event.preventDefault();
        setTodoList([todo, ...todoList]);
    }

    
    /*const removeTodo = (row) => {
        // console.log("delete " + todo.description);
        // setTodoList(todoList.filter((todo, i) => i !== row));
    }*/

    const removeTodo = () => {
        if(gridRef.current.getSelectedNodes().length> 0){
            setTodoList(todoList.filter((todo, index) => 
        index !== gridRef.current.getSelectedNodes()[0].childIndex)); 
        }
        else{
            alert('Select row first!');
        }
               
    }
   
    return(
        <div>
            <h1>Simple Todo list</h1>
            Description: <input type="text" name="description" onChange={inputChanged} value={todo.description} />      
            Date: <input type="date" name="date" onChange={inputChanged} value={todo.date} />
            Priority: <input type="text" name="priority" onChange={inputChanged} value={todo.priority} />
            <button onClick={addTodo}>Add</button>
            <button onClick={removeTodo}>Delete</button>
            <hr />
            <div className="ag-theme-material" style={{margin: "auto", height: 600, width: '60%'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    rowData={todoList}
                    columnDefs={columnDefs}
                    animateRows={true}>
                </AgGridReact>
            </div>

            
        </div>
    );
}

export default TodoList;
//https://ag-grid.com/react-data-grid/floating-filters/ (floating filter)
//https://ag-grid.com/react-data-grid/row-animation/(row animation)
//https://ag-grid.com/react-data-grid/grid-options/ (grid props)
//https://ag-grid.com/react-data-grid/column-properties/