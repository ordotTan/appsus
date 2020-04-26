
export default function TodoItemList(props) {
    return (
        <ul>
            {props.todos.map(todo => 
             <li key={todo.id}>{todo.txt}<button onClick={()=>{props.onRemoveTodo(todo.id)}}>Delete</button></li>) }
        </ul>
    )
}