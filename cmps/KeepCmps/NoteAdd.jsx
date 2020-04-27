
import NoteText from './NoteTxt.jsx'
import NoteTodos from './NoteTodos.jsx'
import NoteImg from './NoteImg.jsx'
import NoteVideo from './NoteVideo.jsx'


export default class NoteAdd extends React.Component {
    state = {
        inputType: '',
    }

    componentDidMount() {
        this.setState({ inputType: 'NoteImg' })
    }


    handleInput = ({ target }) => {
        const inputType = target.name
        this.setState({ inputType })
    }
    render() {
        const {inputType} = this.state
        let activeClass = ''
        // if (inputType === 'NoteTxt')
        //     activeClass = 'active'
        // if (inputType === 'NoteTodos')
        //     activeClass = 'active'
        return (
            <div className="add-note">
                {/* <select onChange={this.handleInput}>
                    <option value='NoteTxt'>Text</option>
                    <option value='NoteTodos'>Todos</option>
                    <option value='NoteImg'>Image</option>
                    <option value='NoteVideo'>Video</option>
                </select> */}
                <div className="add-note flex justify-center align-center">
                    <img className={activeClass} src="../../assets/imgs/note_text.png" name="NoteTxt" onClick={this.handleInput}></img>
                    <img className={activeClass} src="../../assets/imgs/note_list.png" name="NoteTodos" onClick={this.handleInput}></img>
                    <img className={activeClass} src="../../assets/imgs/note_img.png" name="NoteImg" onClick={this.handleInput}></img>
                    <img className={activeClass} src="../../assets/imgs/note_video.png" name="NoteVideo" onClick={this.handleInput}></img>
                </div>


                {(inputType === 'NoteTxt') && <NoteText onSaveNote={this.props.onSaveNote} />}
                {(inputType === 'NoteTodos') && <NoteTodos onSaveNote={this.props.onSaveNote} />}
                {(inputType === 'NoteImg') && <NoteImg onSaveNote={this.props.onSaveNote} />}
                {(inputType === 'NoteVideo') && <NoteVideo onSaveNote={this.props.onSaveNote} />}
            </div>

            // else if (inputType === 'NoteTodos') return <NoteTodos/>
        )
    }
}