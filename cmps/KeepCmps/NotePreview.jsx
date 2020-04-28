import NotePreivewTodos from './NotePreviewTodos.jsx'

export default function NotePreview(props) {



    const { note } = props
    const pin_src = note.isPinned ? 'pin_pinned.png' : 'pin_unpin.png'
    const noteStyle = {
        color: note.style.color,
        backgroundColor: note.style.backgroundColor
    };
    return (
        <article style={noteStyle} className='note-preview flex column space-between align-center' onClick={() => { props.onEditNote(note) }}>
            <img onClick={(ev) => props.onTogglePin(ev, note.id)} className="note-pin" src={`../../assets/imgs/${pin_src}`}></img>
            {note.type === 'NoteTxt' && <h2>{note.info.txt}</h2>}
            {note.type === 'NoteTodos' &&
                <div>
                    <h2>{note.info.label}</h2>
                    <NotePreivewTodos todos={note.info.todos} />

                </div>}
            {note.type === 'NoteImg' &&
                <div className="note-img flex column justify-center align-center">
                    <h2 className="note-header">{note.info.title}</h2>
                    <img src={note.info.url}></img>
                </div>}
            {note.type === 'NoteVideo' &&
                <div className="note-img">
                    <h2 className="note-header">{note.info.title}</h2>
                    <div className="note-movie">
                        <iframe src={`https://www.youtube.com/embed/${note.info.url.substring(note.info.url.indexOf('=') + 1)}`}></iframe>
                    </div>
                </div>}
            <div className="note-actions flex space-around">
                <button className="btn" onClick={() => { props.onDeleteNote(note.id) }}>Delete </button>
                {/* todo URL encode JSON  */}
                <a className="btn note-to-mail" href={`/index.html?noteInfo=${JSON.stringify(note.info)}&noteType=${note.type}#/email`}>Email</a>
            </div>
        </article>
    )

}


