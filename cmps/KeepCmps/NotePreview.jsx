const { Link } = ReactRouterDOM

export default function NotePreview(props) {
    const { note } = props
    return (
        // <Link to={`/book/${book.id}/${book.title}`}>
        <article className='note-preview'>
            <h2>{note.name}</h2>
            <button onClick={()=>{props.onDeleteNote(note.id)}}>Delete </button>
        </article>
        // </Link>

    )
    
}