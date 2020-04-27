import NotePreview from './NotePreview.jsx'

export default function NoteListPinned(props) {
    return (
        <div className="notes-list container">
            {props.notes.map(note => {
                return note.isPinned && <NotePreview onDeleteNote={() =>
                    props.onDeleteNote(note.id)}
                    onEditNote={props.onEditNote}
                    onTogglePin={props.onTogglePin}
                    key={note.id} note={note} />
                }
                
            )}
        </div>
    )
}