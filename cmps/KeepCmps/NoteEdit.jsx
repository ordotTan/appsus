import NoteTxt from './NoteTxt.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteStyle from './NoteStyle.jsx'
import NoteMedia from './NoteMedia.jsx'

export default class NoteEdit extends React.Component {

    render() {
        return (
            <div className="edit-note add-note-form">
                {/* <span className="close-edit-note" onClick={this.props.onCloseEditMode}>Close</span> */}
                {(this.props.note.type === 'NoteTxt') &&
                    <NoteTxt note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteTodos') &&
                    <NoteTodos note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteImg') &&
                     <NoteMedia  noteType='NoteImg'  note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteVideo') &&
                     <NoteMedia noteType='NoteVideo' note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                    <NoteStyle  note={this.props.note} onSetBackgroundColor={this.props.onSetBackgroundColor} onSetFontColor={this.props.onSetFontColor}></NoteStyle>
            </div>
        )
    }
}