const { Link } = ReactRouterDOM
import NotePreivewTodos from './NotePreviewTodos.jsx'
import TodoItemList from './TodoItemList.jsx'


export default function NotePreview(props) {
    
    const { note } = props
    // console.log(note)
    const pin_src = note.isPinned?'pin_pinned.png':'pin_unpin.png'
    const noteStyle = {
        color: note.style.color,
        backgroundColor: note.style.backgroundColor
        };
    return (
        <article style={noteStyle} className='note-preview' onClick={()=>{props.onEditNote(note)}}>
            {note.type === 'NoteTxt' && <h2>Text:{note.info.txt}</h2>}
            {note.type === 'NoteTodos' && 
            <div>
                <h2>Todo-List : {note.info.label}</h2>
                <NotePreivewTodos todos={note.info.todos} />

            </div>}
            <button onClick={() => { props.onDeleteNote(note.id) }}>Delete </button>
            <img onClick={(ev)=>props.onTogglePin(ev,note.id)} className="note-pin" src={`../../assets/imgs/${pin_src}`}></img>
        </article>
    )

}


