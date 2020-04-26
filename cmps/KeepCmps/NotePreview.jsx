const { Link } = ReactRouterDOM
import NotePreivewTodos from './NotePreviewTodos.jsx'

export default function NotePreview(props) {
    const { note } = props
    console.log(note)
    return (
        // <Link to={`/book/${book.id}/${book.title}`}>
        <article className='note-preview'>
            {note.type === 'NoteTxt' &&  <h2>Text : {note.info.txt}</h2>}
            {note.type ==='NoteTodos' && <h2>Todos : {note.info.txt}</h2>}
            <button onClick={()=>{props.onDeleteNote(note.id)}}>Delete </button>
        </article>
        // </Link>

    )
    
}