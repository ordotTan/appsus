
import keepService from '../../services/keepService.js'

export default class NoteTodos extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
    }

    state = {
        info: { label: '', txt: '' } 
    }

    componentDidMount() {
        this.formNameInput.current.focus()
        this.setState({
                info: { label: 'My Todos',txt:'todo 1' }
        })
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        // console.log(field,value)
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
        keepService.addNote(this.state.info,'NoteTodos')
            .then(note => {
                this.setState({
                         info: { label:'My Todos',txt:'todo 1' }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
        const { label,txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <label htmlFor="">Label Todo-List: </label>
                <input type="text" name="label" value={label} onChange={this.handleInput} ref={this.formNameInput}></input>
                <label htmlFor="">Todo txt: </label>
                <input type="text" name="txt" value={txt} onChange={this.handleInput}></input>
                <button>Add ToDo list</button>
            </form>
        </div>
        )
    }
}