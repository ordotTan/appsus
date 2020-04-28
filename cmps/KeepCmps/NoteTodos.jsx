
import keepService from '../../services/keepService.js'
import TodoItemList from './TodoItemList.jsx'
import utilService from '../../services/utilService.js'

export default class NoteTodos extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
        this.todoInput = React.createRef();
    }

    state = {
        info: { label: '', txt: '', todos: [], id: '' },
        style: { backgroundColor: '', color: '' }
    }

    componentDidMount() {
        // console.log(this.props.note)
        this.formNameInput.current.focus()
        const label = this.props.note ? this.props.note.info.label : ''
        const todos = this.props.note ? this.props.note.info.todos : []
        const id = this.props.note ? this.props.note.id : ''
        const backgroudColor = this.props.note ? this.props.note.style.backgroundColor : ''
        const color = this.props.note ? this.props.note.style.color : ''
        this.setState({
            info: { label, txt: '', todos, id },
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
        keepService.add(this.state.info, this.state.style, 'NoteTodos')
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

    addTodoItem = (todoId) => {
        if (typeof todoId === 'string') { //updating existing todo
            const todos = this.state.info.todos
            const todoIdxToUpdate = todos.findIndex(todo => todoId === todo.id)
            todos[todoIdxToUpdate].txt = this.todoInput.current.value,
                this.setState(prevState => (
                    { todos: { ...prevState.info.todos } }))

        }

        else {
            const todo = {
                id: utilService.makeId(5),
                txt: this.todoInput.current.value,
                doneAt: null
            }
            this.setState(prevState => {
                return {
                    info: {
                        ...prevState.info,
                        todos: [ ...prevState.info.todos, todo ]
                    }
                }
            }, () => {
             //  console.log('After:',this.state)
            })
        }
    }

    onRemoveTodo = (todoId) => {
        this.setState(prevState => {
            return {
                info: {
                    ...prevState.info,
                    todos: prevState.info.todos.filter(todo => todoId !== todo.id)
                }
            }
        }, () => {
           // console.log(this.state)
        })
    }

    onMarkTodo = (todoId) => {
        const todos = this.state.info.todos
        const todoIdxToMark = todos.findIndex(todo => todoId === todo.id)
        todos[todoIdxToMark].doneAt = todos[todoIdxToMark].doneAt ? '' : Date.now()
        this.setState(prevState => (
            { todos: { ...prevState.info.todos } }))

    }

    render() {
        const { label, txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <input type="text" placeholder="Todo List Name" name="label" value={label} onChange={this.handleInput} ref={this.formNameInput}></input>
                <input placeholder="Todo Text" ref={this.todoInput} type="text" name="txt" value={txt} onChange={this.handleInput}></input>
                <span className="btn add-todo" onClick={this.addTodoItem}>Add Todo</span>
                <button className="btn">Save Note</button>
                {this.state.info.todos && this.state.info.todos.length > 0 &&
                    <TodoItemList todos={this.state.info.todos} onRemoveTodo={this.onRemoveTodo} onMarkTodo={this.onMarkTodo} addTodoItem={this.addTodoItem} />}
            </form>
        </div>
        )
    }
}