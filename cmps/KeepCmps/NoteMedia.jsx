
import keepService from '../../services/keepService.js'

export default class NoteMedia extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
    }

    state = {
        info: { title: '', url: '', id: '' },
        style: { backgroundColor: '', color: '' }
    }


    componentDidMount() {
        this.formNameInput.current.focus()
        const title = this.props.note ? this.props.note.info.title : ''
        const url = this.props.note ? this.props.note.info.url : ''
        const id = this.props.note ? this.props.note.id : ''
        const backgroudColor = this.props.note ? this.props.note.style.backgroundColor : ''
        const color = this.props.note ? this.props.note.style.color : ''
        this.setState({
            info: { title, url, id },
            style: { backgroudColor, color }
        })
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                info: {
                    ...prevState.info,
                    [field]: value
                }
            }
        })
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        const title = (this.props.noteType === 'NoteImg') ? 'Image Title' : 'Video title'
        keepService.add(this.state.info, this.state.style, this.props.noteType)
            .then(note => {
                this.setState({
                    info: { title, url: '' }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
        const { title, url } = this.state.info
        const placeholderTitle = (this.props.noteType === 'NoteImg') ? 'Image Title' : 'Video title'
        const placeholderUrl = (this.props.noteType === 'NoteImg') ? 'Image URL' : 'Video URL (Youtube)'
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <input type="text" placeholder={placeholderTitle} name="title" value={title} onChange={this.handleInput} ref={this.formNameInput}></input>
                <input type="text" placeholder={placeholderUrl} name="url" value={url} onChange={this.handleInput}></input>
                <button className="btn">Save Note</button>
            </form>
        </div>
        )
    }
}