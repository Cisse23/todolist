import React, { useState, useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css'; //löytyy bootstrap, material-design tai alpine teema
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Snackbar from '@mui/material/Snackbar';

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
    const[open, setOpen] = React.useState(false);
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
        setOpen(true);
        }
        else{
            alert('Select row first!');
        }             
    }
   
    return(
        <div>
            <br></br>
            <Stack 
                direction='row' 
                spacing={2}
                alignItems='center'
                justifyContent='center'>
                
                <TextField
                    name="description"
                    label="Description"
                    variant="standard"
                    value={todo.description}
                    onChange={inputChanged}
                />
                <TextField
                    name="date"
                    label="Date"
                    variant="standard"
                    value={todo.date}
                    onChange={inputChanged}
                />
                <TextField
                    name='priority'
                    label='Priority'
                    variant="standard"
                    value={todo.priority}
                    onChange={inputChanged}
                />
                
                <Button startIcon={<AddBoxIcon />} variant="contained" onClick={addTodo}>Add</Button>
                <Button startIcon={<DeleteIcon />} variant="contained" color="error" onClick={removeTodo}>Delete</Button>
            </Stack>
            <hr />
            <div className="ag-theme-material" style={{margin: "auto", height: 600, width: '40%'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    rowData={todoList}
                    columnDefs={columnDefs}
                    animateRows={true}>
                </AgGridReact>
            </div>

            <Snackbar 
                open={open}
                message="Item deleted succesfully"
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            />
            
        </div>
    );
}

export default TodoList;
//https://ag-grid.com/react-data-grid/floating-filters/ (floating filter)
//https://ag-grid.com/react-data-grid/row-animation/(row animation)
//https://ag-grid.com/react-data-grid/grid-options/ (grid props)
//https://ag-grid.com/react-data-grid/column-properties/

//mui importante
//https://mui.com/material-ui/react-stack/#main-content
//https://mui.com/material-ui/react-button/
//https://mui.com/material-ui/react-text-field/#main-content
//https://mui.com/material-ui/react-typography/#main-content
//https://mui.com/material-ui/react-snackbar/#main-content
//https://mui.com/x/react-date-pickers/date-picker/#main-content //pitää asentaa npm jautta jotain
//https://mui.com/material-ui/material-icons/#main-content 
// ikonit pitä asentaa npm kautta: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
//https://mui.com/material-ui/react-tabs/#main-content
//https://mui.com/material-ui/react-select/