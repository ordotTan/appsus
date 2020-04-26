const { Link } = ReactRouterDOM
import NotePreivewTodos from './NotePreviewTodos.jsx'
import TodoItemList from './TodoItemList.jsx'
import eventBusService from "../../services/eventBusService.js";


export default function NotePreview(props) {

    // function openModal(note) {
    //     eventBusService.emit('note-edit', {note})

    // }

    
    const { note } = props
    return (
        // <Link to={`/book/${book.id}/${book.title}`}>
        <article className='note-preview' onClick={()=>{props.onEditNote(note)}}>
            {note.type === 'NoteTxt' && <h2>Text:{note.info.txt}</h2>}
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


