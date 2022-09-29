import React from "react";

function TodoTable(props){

    if(props.todos.length>=1){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th><th>Description</th>
                        </tr>
                        { (props.todos).map((todo, index) => 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={() => props.removeTodo(index)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    
        );
    }
    
    else{
        return(
            <div>
                <p>Nothing to do!</p>
            </div>
        );
    }

}

export default TodoTable;


