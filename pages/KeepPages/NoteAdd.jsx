
import keepService from '../services/keepService.js'

export default class NoteAdd extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
    }

    state = {
        note: {
            name: ''
        }
    }

    componentDidMount() {
        this.formNameInput.current.focus()
        this.setState({  note: {  //Default values to the form
            name: 'My Note', 
          //  comment:'',
          //  readAt:new Date().toISOString().slice(0,10)
        } }) 
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                note: {
                    ...prevState.note,
                    [field]: value
                }
            }
        })
    }

    onAddNote = (ev) => {
        ev.preventDefault()
        keepService.addNote(this.state.note)
            .then(note => {
                console.log(note)
                this.setState({ note: {  //clearing the form back to default
                    name: 'My Note', 
                    // comment:'',
                    // rate:'',
                    // readAt:new Date().toISOString().slice(0,10)
                } }) 
                   // this.props.loadNotes()
                    this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
        const { name } = this.state.note
        return (<div>
            <h2>Submit your review</h2>
            <form className="form" onSubmit={this.onAddNote}>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" value={name} onChange={this.handleInput} ref={this.formNameInput}></input>
                <button>Add Note</button>
            </form>
        </div>
        )
    }
}