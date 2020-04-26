import NoteList from '../cmps/KeepCmps/NoteList.jsx'
import NoteFilter from '../cmps/KeepCmps/NoteFilter.jsx'
import keepService from '../services/keepService.js'
import NoteAdd from '../pages/KeepPages/NoteAdd.jsx'
import NoteEdit from '../cmps/KeepCmps/NoteEdit.jsx'

export default class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        selectedNote: null,
        editMode: false,
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

    onDeleteNote = (noteId) => {
        keepService.removeNote(noteId)
            .then(() => {
                this.loadNotes()
            })
    }

    onEditNote = (note) => {
        this.setState({ editMode: true, selectedNote: note })
    }

    onSaveNote = () => {
        this.loadNotes()
    }

    render() {
        const { notes } = this.state

        return (
            <div className="keep"> <h1>Keep</h1>
                <NoteFilter onSetFilter={this.onSetFilter} />
                <NoteAdd onSaveNote={this.onSaveNote}></NoteAdd>
                {notes && <NoteList onDeleteNote={this.onDeleteNote} onEditNote={this.onEditNote} notes={notes}></NoteList>}
                {this.state.editMode && <NoteEdit note={this.state.selectedNote} />}

            </div>

        )
    }
}