import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    return (
        <div className="notes-list container">
            {props.notes.map(note => {
                return !note.isPinned && <NotePreview 
                    onDeleteNote={props.onDeleteNote}
                    onEditNote={props.onEditNote}
                    onTogglePin={props.onTogglePin}
                    key={note.id} note={note} />
                }
                
            )}
        </div>
    )
}