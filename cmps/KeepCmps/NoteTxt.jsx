
import keepService from '../../services/keepService.js'

export default class NoteText extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
    }

    state = {
        info: { txt: '', id: '' }
    }

    componentDidMount() {
        this.formNameInput.current.focus()
        const txt = this.props.note ? this.props.note.info.txt : ''
        const id = this.props.note ? this.props.note.id : ''
        this.setState({
            info: { txt, id }
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
        keepService.addNote(this.state.info, 'NoteTxt')
            .then(note => {
                this.setState({
                    info: { txt: 'My Note' }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
       // console.log(this.props.note)
        const { txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <label htmlFor="">Note Text: </label>
                <input type="text" name="txt" value={txt} onChange={this.handleInput} ref={this.formNameInput}></input>
                <button>Save Note</button>
            </form>
        </div>
        )
    }
}