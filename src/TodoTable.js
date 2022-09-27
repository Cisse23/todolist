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
                        { Array.from(props.todos).map((todo, index) => 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={props.removeTodo}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    
        );
    }
    
    else{
        console.log("can't map: " + props.todos);
        return(
            <div>
                <p>Nothing to do!</p>
            </div>
        );
    }

}

export default TodoTable;


