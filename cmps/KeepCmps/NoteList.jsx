import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    return (
        <div className="notes-list">
            {props.notes.map(note => 
            <NotePreview onDeleteNote = {()=>props.onDeleteNote(note.id)} onEditNote = {props.onEditNote} key={ note.id } note={ note } />) }
        </div>
    )
}