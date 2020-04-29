
import keepService from '../../services/keepService.js'

export default class NoteText extends React.Component {

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
            let emailText = `From ${emailObj.from} To ${emailObj.from} Subject:${emailObj.subject}  \n ${emailObj.body}`
            this.setState({ info: { txt: emailText } }, () => {
                this.onAddNote()
            })
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
        console.log('or')
        console.log(this.props.history)
        // this.props.history.replaceState('keepapp', '/keep/')
        // history.replaceState && history.replaceState(
        //     null, '', location.pathname + location.search.replace(/[\?&]message=[^&]+/, '').replace(/^&/, '?') + location.hash
        // );
        // console.log(window.location)
        // window.history.replaceState({}, document.title, window.location.origin +'/'+window.location.hash);
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
            <form className="form flex justify-center align-center" onSubmit={this.onAddNote}>
                <input type="text" placeholder="Your Text" name="txt" value={txt} onChange={this.handleInput}></input>
                <button className="btn save-note">Save Note</button>
            </form>
        </div>
        )
    }
}