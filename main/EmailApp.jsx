import EmailHeader from '../cmps/EmailCmps/EmailHeader.jsx'
import EmailSidebar from '../cmps/EmailCmps/EmailSidebar.jsx'
import EmailsList from '../cmps/EmailCmps/EmailsList.jsx'
import EmailCompose from '../cmps/EmailCmps/EmailCompose.jsx'
import emailService from '../services/emailService.js'

export default class EmailApp extends React.Component {

    state = {
        emails: null,
        isComposing: false
    }

    componentDidMount() {
        emailService.query()
            .then(emails => this.setState({ emails }));
    }

    toggleCompositor = () => {
        this.setState(prevState => ({
            isComposing: !prevState.isComposing
        }));
    };

    submitMail = (from, to, subject, body) => {
        emailService.sendemail(from, to, subject, body);
        emailService.query()
            .then(emails => this.setState({ emails }));
    }

    deleteMail = (mailId) => {
        emailService.deleteMail(mailId);
        emailService.query()
        .then(emails => this.setState({ emails }));
    }

    render() {

        const { emails, isComposing } = this.state;

        return (
            <main className="email">
                <EmailSidebar toggleCompositor={this.toggleCompositor} />
                {emails && <EmailsList emails={emails} deleteMail={this.deleteMail} />}
                {isComposing && <EmailCompose submitMail={this.submitMail} toggleCompositor={this.toggleCompositor} />}
            </main>

        )
    }
}