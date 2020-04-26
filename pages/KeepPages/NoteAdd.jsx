
import NoteText from '../../cmps/KeepCmps/NoteTxt.jsx'
import NoteTodos from '../../cmps/KeepCmps/NoteTodos.jsx'
import NoteImg from '../../cmps/KeepCmps/NoteImg.jsx'


export default class NoteAdd extends React.Component {
    state = {
        inputType: 'NoteTxt',
    }

    handleInput = (ev) => {
        console.log(ev.target.value)
        const value = ev.target.value
        this.setState({inputType:value})
    }
    render() {
        const inputType = this.state.inputType
        return (
            <div>
                <select onChange={this.handleInput}>
                    <option value='NoteTxt'>Text</option>
                    <option value='NoteTodos'>Todos</option>
                    <option value='NoteImg'>Image</option>
                </select>
                {(inputType === 'NoteTxt') && <NoteText onSaveNote={this.props.onSaveNote} />}
                {(inputType === 'NoteTodos') && <NoteTodos onSaveNote={this.props.onSaveNote} />}
                {(inputType === 'NoteImg') && <NoteImg onSaveNote={this.props.onSaveNote} />}
            </div>

            // else if (inputType === 'NoteTodos') return <NoteTodos/>
        )
    }
}