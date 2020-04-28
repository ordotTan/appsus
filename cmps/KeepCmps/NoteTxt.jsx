
import keepService from '../../services/keepService.js'

export default class NoteText extends React.Component {

    constructor() {
        super();
        this.formNameInput = React.createRef();
    }

    state = {
        info: { txt: '', id: '' },
        style: { backgroundColor: '', color: '' }
    }

    componentDidMount() {
        let txt
        const urlParams = new URLSearchParams(window.location.search);
        let email = urlParams.get('email');
        if (email) {
            let emailObj = JSON.parse(email)
            let subject = emailObj.subject
            subject = 'From email: '+subject
            this.setState({ info: { txt: subject }},()=> {
                this.onAddNote()
            })
        }
        else {
            this.formNameInput.current.focus()
            txt = this.props.note ? this.props.note.info.txt : ''
            let id = this.props.note ? this.props.note.id : ''
            let backgroudColor = this.props.note ? this.props.note.style.backgroundColor : ''
            let color = this.props.note ? this.props.note.style.color : ''
            this.setState({
                info: { txt, id },
                style: { backgroudColor, color }
            })
        }
        window.history.replaceState({}, document.title, "/index.html#/keep");
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
        if (ev) ev.preventDefault()
        keepService.add(this.state.info, this.state.style, 'NoteTxt')
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

        const { txt } = this.state.info
        return (<div>
            <form className="form" onSubmit={this.onAddNote}>
                <input type="text" placeholder="Your Text" name="txt" value={txt} onChange={this.handleInput} ref={this.formNameInput}></input>
                <button className="btn">Save Note</button>
            </form>
        </div>
        )
    }
}