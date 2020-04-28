import NotePreivewTodos from './NotePreviewTodos.jsx'

export default function NotePreview(props) {



    const { note } = props
    const pin_src = note.isPinned ? 'pin_pinned.png' : 'pin_unpin.png'
    const noteStyle = {
        color: note.style.color,
        backgroundColor: note.style.backgroundColor
    };
    return (
        <article style={noteStyle} className='note-preview' onClick={() => { props.onEditNote(note) }}>
            {note.type === 'NoteTxt' && <h2>Text:{note.info.txt}</h2>}
            {note.type === 'NoteTodos' &&
                <div>
                    <h2>Todo-List : {note.info.label}</h2>
                    <NotePreivewTodos todos={note.info.todos} />

                </div>}
            {note.type === 'NoteImg' &&
                <div className="note-img">
                    <h2>Image : {note.info.title}</h2>
                    <img src={note.info.url}></img>
                </div>}
            {note.type === 'NoteVideo' &&
                <div className="note-img">
                    <h2>Video : {note.info.title}</h2>
                    <div className="note-movie">
                        <iframe src={`https://www.youtube.com/embed/${note.info.url.substring(note.info.url.indexOf('=')+1)}`}></iframe>
                    </div>
                </div>}
            <button onClick={() => { props.onDeleteNote(note.id) }}>Delete </button>
            <a href={`/index.html?note=${JSON.stringify(note.info)}#/email`}>Compose Email</a>
            <img onClick={(ev) => props.onTogglePin(ev, note.id)} className="note-pin" src={`../../assets/imgs/${pin_src}`}></img>
        </article>
    )

}


