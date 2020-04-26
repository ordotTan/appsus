
export default function NotePreviewTodos(props) {
    return (
        <ul>
            {props.todos.map(todo => 
            <li key={todo.id} className={todo.doneAt ? 'todo-done':''} >{todo.txt}</li>) }
        </ul>
    )
}