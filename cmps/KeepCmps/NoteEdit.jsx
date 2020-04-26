import NoteText from '../../cmps/KeepCmps/NoteTxt.jsx'
import NoteTodos from '../../cmps/KeepCmps/NoteTodos.jsx'
import NoteImg from '../../cmps/KeepCmps/NoteImg.jsx'

export default class NoteEdit extends React.Component {

    render() {
        return (<h1>Let's edit {this.props.note.id}</h1>)
    }
}