import NoteList from '../cmps/KeepCmps/NoteList.jsx'
import NoteListPinned from '../cmps/KeepCmps/NoteListPinned.jsx'
import NoteFilter from '../cmps/KeepCmps/NoteFilter.jsx'
import NoteAdd from '../cmps/KeepCmps/NoteAdd.jsx'
import NoteEdit from '../cmps/KeepCmps/NoteEdit.jsx'
import keepService from '../services/keepService.js'
import eventBusService from '../services/eventBusService.js'


export default class KeepApp extends React.Component {

    state = {
        notes: null,
        filterBy: null,
        selectedNote: null,
        editMode: false,
    }

    componentDidMount() {
        eventBusService.emit('set-nav-state', 'keep')
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
        keepService.remove(noteId)
            .then(() => {
                this.loadNotes()
                this.setState({ selectedNote: null, editMode: false })
            })
    }

    onEditNote = (note) => {
        this.setState({ editMode: true, selectedNote: note })
    }

    onCloseEditMode = () => {
        this.setState({ editMode: false, selectedNote: '' })
    }

    onSaveNote = () => {
        this.loadNotes()
        this.setState({ selectedNote: null, editMode: false })
    }

    onTogglePin = (ev, noteId) => {
        ev.stopPropagation()
        keepService.updatePinStatus(noteId)
            .then(() => {
                this.loadNotes()
            })
    }

    onSetBackgroundColor = (noteId, value) => {
        keepService.updateBackgroundColor(noteId, value)
            .then(() => {
                this.loadNotes()
            })
    }

    onSetFontColor = (noteId, value) => {
        keepService.updateFontColor(noteId, value)
            .then(() => {
                this.loadNotes()
            })
    }

    onToggleEditModal = () => {
        console.log('toggled')
    }

    render() {
        const { notes } = this.state
        return (
            <div className="keep">
                 <section className="screen" onClick={this.onToggleEditModal}></section>
                <NoteFilter onSetFilter={this.onSetFilter} />
                <h1>What do you want to <span>keep</span> today?</h1>
                <NoteAdd onSaveNote={this.onSaveNote}></NoteAdd>
                <h2>Pinned Items</h2>
                {notes && <NoteListPinned onDeleteNote={this.onDeleteNote} onEditNote={this.onEditNote} notes={notes} onTogglePin={this.onTogglePin}></NoteListPinned>}
                <h2>Other Items</h2>
                {notes && <NoteList onDeleteNote={this.onDeleteNote} onEditNote={this.onEditNote} notes={notes} onTogglePin={this.onTogglePin}></NoteList>}
                {this.state.editMode && <NoteEdit note={this.state.selectedNote} onSaveNote={this.onSaveNote} onCloseEditMode={this.onCloseEditMode} onSetBackgroundColor={this.onSetBackgroundColor} onSetFontColor={this.onSetFontColor} />}

            </div>

        )
    }
}