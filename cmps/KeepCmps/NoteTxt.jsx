
import keepService from '../../services/keepService.js'

export default class NoteTxt extends React.Component {

    state = {
        info: { txt: '', id: '' },
        style: { backgroundColor: '', color: '' }
    }

    componentDidMount() {
        let txt
        if (this.props.urlParams) {
            const urlParams = new URLSearchParams(this.props.urlParams);
            let email = urlParams.get('email');
            if (email) {
                let emailObj = JSON.parse(email)
                let emailText = `From ${emailObj.from} To ${emailObj.from} Subject:${emailObj.subject}  \n ${emailObj.body}`
                this.setState({ info: { txt: emailText } }, () => {
                    this.onAddNote()
                })
            }
            this.props.history.push('/keep');
        }
        else {
            txt = this.props.note ? this.props.note.info.txt : ''
            let id = this.props.note ? this.props.note.id : ''
            let backgroudColor = this.props.note ? this.props.note.style.backgroundColor : ''
            let color = this.props.note ? this.props.note.style.color : ''
            this.setState({
                info: { txt, id },
                style: { backgroudColor, color }
            })
        }

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
                    info: { txt: '' }
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
            <form className="form flex total-center" onSubmit={this.onAddNote}>
                <input className="text-input" type="text" placeholder="Your Text" name="txt" value={txt} onChange={this.handleInput}></input>
                <button className="btn save-note">Save Note</button>
            </form>
        </div>
        )
    }
}