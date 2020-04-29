import NotePreivewTodos from './NotePreviewTodos.jsx'
import LongText from '../LongText.jsx'

export default class NotePreview extends React.Component {

    state = {
        isLongTxtShown: false
    }

    noPropagation = (clickEvent) => clickEvent.stopPropagation()

    onToggleDesc = (ev) => {
        ev.stopPropagation()
        this.setState(({ isLongTxtShown }) => ({ isLongTxtShown: !isLongTxtShown }))

    }

    render() {
        const note = this.props.note
        const pin_src = note.isPinned ? 'pin_pinned.png' : 'pin_unpin.png'
        const noteStyle = {
            color: note.style.color,
            backgroundColor: note.style.backgroundColor
        };
        return (
            <article style={noteStyle} className='note-preview flex column space-between align-center' onClick={() => { this.props.onEditNote(note) }}>
                <img onClick={(ev) => this.props.onTogglePin(ev, note.id)} className="note-pin" src={`assets/imgs/${pin_src}`}></img>
                {note.type === 'NoteTxt' &&  <LongText txtLimit={20} text={note.info.txt} isLongTxtShown={this.state.isLongTxtShown} onToggleDesc={this.onToggleDesc}></LongText>} 
                {note.type === 'NoteTodos' &&
                    <div>
                        <h2>{note.info.label}</h2>
                        <NotePreivewTodos todos={note.info.todos} />

                    </div>}
                {note.type === 'NoteImg' &&
                    <div className="note-img flex column justify-center align-center">
                        <h2 className="note-header">{note.info.title}</h2>
                        <img src={note.info.url}></img>
                    </div>}
                {note.type === 'NoteVideo' &&
                    <div className="note-img">
                        <h2 className="note-header">{note.info.title}</h2>
                        <div className="note-movie">
                            <iframe src={`https://www.youtube.com/embed/${note.info.url.substring(note.info.url.indexOf('=') + 1)}`}></iframe>
                        </div>
                    </div>}
                <div className="note-actions flex space-around">
                    <button className="btn" onClick={(ev) => { this.props.onDeleteNote(ev, note.id) }}>Delete </button>
                    {/* todo URL encode JSON  */}
                    <a className="btn note-to-mail" onClick={this.noPropagation} href={`/index.html?noteInfo=${JSON.stringify(note.info)}&noteType=${note.type}#/email`}>Email</a>
                </div>
            </article>

        )
    }

}


