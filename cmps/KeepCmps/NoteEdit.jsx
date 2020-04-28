import NoteText from './NoteTxt.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteStyle from './NoteStyle.jsx'
import NoteImg from './NoteImg.jsx'
import NoteVideo from './NoteVideo.jsx'

export default class NoteEdit extends React.Component {

    render() {
        return (
            <div className="edit-note add-note-form">
                {/* <span className="close-edit-note" onClick={this.props.onCloseEditMode}>Close</span> */}
                {(this.props.note.type === 'NoteTxt') &&
                    <NoteText note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteTodos') &&
                    <NoteTodos note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteImg') &&
                     <NoteImg note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteVideo') &&
                     <NoteVideo note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                    <NoteStyle note={this.props.note} onSetBackgroundColor={this.props.onSetBackgroundColor} onSetFontColor={this.props.onSetFontColor}></NoteStyle>
            </div>
        )
    }
}