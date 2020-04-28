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

        this.props.submitMail(to, subject, body)
        this.props.toggleCompositor();
    };

    onCloseComposer = () => {
        this.props.toggleCompositor();
    };

    setNoteValues() {

        const { note } = this.props

        if (note) {
            console.log('compositor got', note)
            this.bodyInput.current.value = note.info.txt;
        };
    }

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
                    <textarea className="body-input" ref={this.bodyInput} type="text" placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" value="Send" />
                </form>
            </section>
        )
    };
};