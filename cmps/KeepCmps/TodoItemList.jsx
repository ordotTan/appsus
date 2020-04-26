
export default function TodoItemList(props) {
    return (
        <ul className="todo-list">
            {props.todos.map(todo => 
             <li key={todo.id}><span className="" onClick={()=>{props.onMarkTodo(todo.id)}} className={todo.doneAt ? 'todo-item todo-done':'todo-item'} >{todo.txt} </span>
             {/* {new Date(todo.doneAt).toLocaleDateString("en-US")}
             {new Date(todo.doneAt).toLocaleTimeString("en-US")} */}
             <span className="remove-todo" onClick={()=>{props.onRemoveTodo(todo.id)}}> Remove </span>
             <span className="update-todo" onClick={()=>{props.addTodoItem(todo.id)}}> Update </span>
             </li>) }
        </ul>
    )
}