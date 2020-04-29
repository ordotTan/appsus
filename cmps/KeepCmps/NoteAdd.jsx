
import NoteText from './NoteTxt.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteMedia from './NoteMedia.jsx'

export default class NoteAdd extends React.Component {
    state = {
        inputType: '',
    }

    componentDidMount() {
        this.setState({ inputType: 'NoteTxt' })
    }


    handleInput = ({ target }) => {
        const inputType = target.name
        this.setState({ inputType })
    }
    render() {
        const { inputType } = this.state
        return (
            <div className="add-note">
                <div className="add-note flex justify-center align-center">
                    <img className={(inputType ==='NoteTxt')?"active":''} src="assets/imgs/note_text.png" name="NoteTxt" onClick={this.handleInput}></img>
                    <img className={(inputType ==='NoteTodos')?"active":''} src="assets/imgs/note_list.png" name="NoteTodos" onClick={this.handleInput}></img>
                    <img className={(inputType ==='NoteImg')?"active":''} src="assets/imgs/note_img.png" name="NoteImg" onClick={this.handleInput}></img>
                    <img className={(inputType ==='NoteVideo')?"active":''} src="assets/imgs/note_video.png" name="NoteVideo" onClick={this.handleInput}></img>
                </div>

                <div className="add-note-form">
                    {(inputType === 'NoteTxt') && <NoteText onSaveNote={this.props.onSaveNote} />}
                    {(inputType === 'NoteTodos') && <NoteTodos onSaveNote={this.props.onSaveNote} />}
                    {(inputType === 'NoteImg') && <NoteMedia noteType='NoteImg' onSaveNote={this.props.onSaveNote} />}
                    {(inputType === 'NoteVideo') && <NoteMedia  noteType='NoteVideo' onSaveNote={this.props.onSaveNote} />}
                </div>
            </div>
        )
    }
}