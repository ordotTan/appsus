import EmailHeader from '../cmps/EmailCmps/EmailHeader.jsx'
import EmailSidebar from '../cmps/EmailCmps/EmailSidebar.jsx'
import EmailsList from '../cmps/EmailCmps/EmailsList.jsx'
import EmailCompose from '../cmps/EmailCmps/EmailCompose.jsx'
import eventBusService from "./services/eventBusService.js";
import emailService from '../services/emailService.js'

export default class EmailApp extends React.Component {

    state = {
        emails: null,
        isComposing: false,
        filter: {
            txt: null,
            status: null
        }
    }

    componentDidMount() {
        eventBusService.on('filter-email-by-text', (txt) => {
            this.filterTxt(txt)
        });
        this.loadEmails();
    };

    loadEmails() {
        emailService.query(this.state.filter)
            .then(emails => this.setState({ emails }));
    }

    filterTxt = (val) => {
        this.setState(prevState => ({ filter: { ...prevState.filter, txt: val }, }), () => {
            this.loadEmails()
        });
    }

    toggleCompositor = () => {
        this.setState(prevState => ({
            isComposing: !prevState.isComposing
        }));
    };

    submitMail = (from, to, subject, body) => {
        emailService.sendemail(from, to, subject, body);
        this.loadEmails();
    };

    deleteMail = (mailId) => {
        event.stopPropagation();
        emailService.deleteMail(mailId);
        this.loadEmails();
    };

    openMail = (mailId) => {
        console.log('open mail happend', mailId);
    };

    render() {

        const { emails, isComposing } = this.state;

        return (
            <main className="email">
                <EmailSidebar toggleCompositor={this.toggleCompositor} />
                {emails && <EmailsList emails={emails} deleteMail={this.deleteMail} openMail={this.openMail} />}
                {isComposing && <EmailCompose submitMail={this.submitMail} toggleCompositor={this.toggleCompositor} />}
            </main>

        )
    }
}