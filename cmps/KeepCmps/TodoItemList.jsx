
export default function TodoItemList(props) {
    return (
        <ul className="todo-list flex justify-center align-center column">
            {props.todos.map(todo =>
                <li className="flex  space-between" key={todo.id}><span  onClick={() => { props.onMarkTodo(todo.id) }} className={todo.doneAt ? 'todo-item todo-done' : 'todo-item'} >&#9679; {todo.txt} </span>
                    {/* {new Date(todo.doneAt).toLocaleDateString("en-US")}
             {new Date(todo.doneAt).toLocaleTimeString("en-US")} */}
                    <div className="todo-actions flex">
                        <span className="remove-todo btn" onClick={() => { props.onRemoveTodo(todo.id) }}> Remove </span>
                        <span className="update-todo btn" onClick={() => { props.addTodoItem(todo.id) }}> Update </span>
                    </div>
                </li>)}
        </ul>
    )
}