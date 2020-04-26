import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    return (
        <div>
            {props.notes.map(note => 
            <NotePreview onDeleteNote = {()=>props.onDeleteNote(note.id)} key={ note.id } note={ note } />) }
        </div>
    )
}