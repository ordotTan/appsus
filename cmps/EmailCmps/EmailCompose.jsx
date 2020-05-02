import eventBusService from "../../services/eventBusService.js";

export default class EmailCompose extends React.Component {

    constructor() {
        super();
        this.fromInput = React.createRef();
        this.toInput = React.createRef();
        this.subjectInput = React.createRef();
        this.bodyInput = React.createRef();
    };

    componentDidMount() {
        this.setNoteValues();
        this.toInput.current.focus()
    }

    onSubmit = () => {

        const to = this.toInput.current.value
        const subject = this.subjectInput.current.value
        const body = this.bodyInput.current.value
        
        if (to === '') {
            this.alertUser()
            return;
        };
        this.props.history.push('/email'); 
        this.props.submitMail(to, subject, body)
        this.props.toggleCompositor();
    };

    alertUser() {
        eventBusService.emit('user-msg', { header: 'No recipient!', body: 'Please specify at least one recipient' });
    }

    onCloseComposer = () => {
        this.props.history.push('/email'); 
        this.props.toggleCompositor();
    };

    setNoteValues() {

        const { note } = this.props
        if (note) {
            // console.log('compositor got', note)
            if (note.noteType === 'NoteTxt') {
                this.bodyInput.current.value = note.noteInfo.txt;
            } else if (note.noteType === 'NoteTodos') {
                let listStr = ''
                note.noteInfo.todos.forEach(todo => {
                    listStr += '- ' + todo.txt + '\n';
                });
                this.subjectInput.current.value = note.noteInfo.label;
                this.bodyInput.current.value = listStr;
            } else {
                eventBusService.emit('uesr-msg', { header: 'Invalid note type!', body: 'Only text note and todos tones are supported' })
            };
        };
    };

    render() {

        return (
            <section className="mail-window-container">
                <div className="mail-window-header">
                    <h3>New Message</h3>
                    <h4 onClick={this.onCloseComposer} className="close-mail-window">X</h4>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.fromInput} type="text" value="From: Daniel Goldfine" readOnly />
                    <input ref={this.toInput} type="text" placeholder="To" />
                    <input ref={this.subjectInput} type="text" placeholder="Subject" />
                    {/* <textarea className="body-input" ref={this.bodyInput} type="text" placeholder="Your Message">{this.state.linebreak}</textarea> */}
                    <textarea className="body-input" ref={this.bodyInput} type="text" placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" value="Send" />
                </form>
            </section>
        )
    };
};