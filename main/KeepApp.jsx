import NoteList from '../cmps/KeepCmps/NoteList.jsx'
import NoteFilter from '../cmps/KeepCmps/NoteFilter.jsx'
import keepService from '../services/keepService.js'
import NoteAdd from '../pages/KeepPages/NoteAdd.jsx'

export default class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        keepService.query(this.state.filterBy)
            .then(notes => {
                this.setState({ notes })
            })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadNotes())
    }

    onSelectedNote = () => {

    }

    onDeleteNote = (noteId) => {
        keepService.removeNote(noteId)
        .then(() => {
            this.loadNotes()
        })
    }

    onSaveNote = () => {
        this.loadNotes()
    }

    render() {
        const { notes } = this.state
        return (
            <div className="keep"> <h1>Keep</h1>
                 <NoteAdd onSaveNote = {this.onSaveNote}></NoteAdd>
                   {/* <NoteAdd></NoteAdd> */}
                 <NoteFilter onSetFilter={this.onSetFilter} />
                {notes && <NoteList onDeleteNote = {this.onDeleteNote} notes={notes}></NoteList>}
            </div>

        )
    }
}