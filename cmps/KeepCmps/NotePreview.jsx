const { Link } = ReactRouterDOM
import NotePreivewTodos from './NotePreviewTodos.jsx'
import TodoItemList from './TodoItemList.jsx'

export default function NotePreview(props) {
    const { note } = props
    return (
        // <Link to={`/book/${book.id}/${book.title}`}>
        <article className='note-preview'>
            {note.type === 'NoteTxt' && <h2>Text : {note.info.txt}</h2>}
            {note.type === 'NoteTodos' && 
            <div>
                <h2>Todo-List : {note.info.label}</h2>
                <NotePreivewTodos todos={note.info.todos} />

            </div>}
            <button onClick={() => { props.onDeleteNote(note.id) }}>Delete </button>
        </article>
        // </Link>

    )

}


