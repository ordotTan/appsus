
import keepService from '../../services/keepService.js'

export default class NoteTodos extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
        this.todoInput = React.createRef();
    }

    state = {
        info: { label: '', txt: '',todos:[] }
    }

    componentDidMount() {
        this.formNameInput.current.focus()
        this.setState({
            info: { label: 'My Todos', txt: 'todo 1',todos:[]}
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
        keepService.addNote(this.state.info, 'NoteTodos')
            .then(note => {
                this.setState({
                    info: { label: 'My Todos', txt: 'todo 1',todos:[{text:'dddd'}] }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    addTodoItem = () => {
        let todo = this.todoInput.current.value
        this.todoInput.current.value=''
        console.log('todo',todo)
        //console.log ({...this.state.info.todos})
        this.setState({...this.state.info.todos,todo})
        console.log (this.state.info.todos)
    }

    render() {
        const { label, txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <label htmlFor="">Label Todo-List: </label>
                <input type="text" name="label" value={label} onChange={this.handleInput} ref={this.formNameInput}></input>
                <label htmlFor="">Todo txt: </label>
                <div>
                    <input ref={this.todoInput} type="text" name="txt" value={txt} onChange={this.handleInput}></input>
                    <p onClick={this.addTodoItem}>+</p>
                </div>

                <button>Add ToDo list</button>
            </form>
        </div>
        )
    }
}