
export default function NotePreviewTodos(props) {
    return (
        <ul>
            {props.todos.map(todo => 
             <li key={todo.id}>{todo.txt}</li>) }
        </ul>
    )
}