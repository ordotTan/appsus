
import keepService from '../../services/keepService.js'

export default class NoteVideo extends React.Component {

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
        const url = this.props.note ? this.props.note.info.url : 'https://www.youtube.com/watch?v=P834QexYsQo'
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
        keepService.addNote(this.state.info, this.state.style, 'NoteVideo')
            .then(note => {
                this.setState({
                    info: { title: 'Video title', url: '' }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
        const { title, url } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <input type="text" placeholder="Video Title" name="title" value={title} onChange={this.handleInput} ref={this.formNameInput}></input>
                <input type="text" placeholder="Video URL (Youtube)" name="url" value={url} onChange={this.handleInput}></input>
                <button className="btn">Save Note</button>
            </form>
        </div>
        )
    }
}