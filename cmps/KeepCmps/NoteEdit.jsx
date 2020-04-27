import NoteText from './NoteTxt.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteStyle from './NoteStyle.jsx'
import NoteImg from './NoteImg.jsx'

export default class NoteEdit extends React.Component {

    render() {
        //const inputType = this.propos.inputType
        return (
            <div className="edit-note">
                <span className="close-edit-note" onClick={this.props.onCloseEditMode}>Close</span>
                {(this.props.note.type === 'NoteTxt') &&
                    <NoteText note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                {(this.props.note.type === 'NoteTodos') &&
                    <NoteTodos note={this.props.note} onSaveNote={this.props.onSaveNote} />}
                    <NoteStyle note={this.props.note} onSetBackgroundColor={this.props.onSetBackgroundColor} onSetFontColor={this.props.onSetFontColor}></NoteStyle>
            </div>
        )
    }
}