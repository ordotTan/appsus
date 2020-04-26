
import keepService from '../../services/keepService.js'
import TodoItemList from './TodoItemList.jsx'
import utilService from '../../utilService.js'

export default class NoteTodos extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
        this.todoInput = React.createRef();
    }

    state = {
        info:
            { label: '', txt: '', todos: [] }
    }

    componentDidMount() {
        this.formNameInput.current.focus()
        this.setState({
            info: { label: 'My Todos', txt: '', todos: [] }
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
        keepService.addNote(this.state.info, 'NoteTodos')
            .then(note => {
                this.setState({
                    info: { label: 'My Todos', txt: '', todos: [] }
                })
                this.props.onSaveNote(note)
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    addTodoItem = () => {
        const todo = {
            id: utilService.makeId(5),
            txt: this.todoInput.current.value,
            doneAt: null
        }
        this.setState(prevState => (
            prevState.info.todos.push(todo),
            { todos: { ...prevState.info.todos, todo } }))
    }

    onRemoveTodo = (todoId) => {
        const todos = this.state.info.todos
        const todoIdxToRemove = todos.find(todo => todoId === todo.id)
        this.setState(prevState => (
            prevState.info.todos.splice(todoIdxToRemove, 1),
            { todos: { ...prevState.info.todos } }))
    }

    render() {
        const { label, txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <label htmlFor="">Label Todo-List: </label>
                <input type="text" name="label" value={label} onChange={this.handleInput} ref={this.formNameInput}></input>
                <label htmlFor="">Todo txt: </label>
                <input ref={this.todoInput} type="text" name="txt" value={txt} onChange={this.handleInput}></input>
                <div className="btn add-todo" onClick={this.addTodoItem}>Add todo</div>
                {this.state.info.todos && this.state.info.todos.length > 0 &&
                    <TodoItemList todos={this.state.info.todos} onRemoveTodo={this.onRemoveTodo} />}
                <button>Add ToDo list</button>
            </form>
        </div>
        )
    }
}