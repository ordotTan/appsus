export default class EmailCompose extends React.Component {



    constructor() {
        super();
        this.fromInput = React.createRef();
        this.toInput = React.createRef();
        this.subjectInput = React.createRef();
        this.bodyInput = React.createRef();
    }

    onSubmit = () => {

        const from = this.fromInput.current.value
        const to = this.toInput.current.value
        const subject = this.subjectInput.current.value
        const body = this.bodyInput.current.value

        this.props.submitMail(from, to, subject, body)

        this.props.toggleCompositor();

        this.toInput.current.value = ''
        this.subjectInput.current.value = ''
        this.bodyInput.current.value = ''


    }

    render() {

        return (
            <section className="mail-composing-container">
                <div className="mail-composer-header">
                    <h3>New Message</h3>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.fromInput} type="text" placeholder="From" />
                    <input ref={this.toInput} type="text" placeholder="To" />
                    <input ref={this.subjectInput} type="text" placeholder="Subject" />
                    <input ref={this.bodyInput} type="text" placeholder="Your Message" />
                    <input type="submit" />
                </form>
            </section>
        )
    };
};