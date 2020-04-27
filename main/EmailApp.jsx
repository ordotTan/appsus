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
        eventBusService.emit('set-nav-state', 'email');
        this.removeFilterTextEB = eventBusService.on('filter-email-by-text', (txt) => {
            this.setFilterTxt(txt)
        });
        this.removeFilterStatusEB = eventBusService.on('filter-email-by-status', (status) => {
            this.setFilterStatus(status)
        });
        this.loadEmails();
    };

    componentWillUnmount() {
        this.removeFilterTextEB();
        this.removeFilterStatusEB();
    };

    loadEmails() {
        emailService.query(this.state.filter)
            .then(emails => this.setState({ emails }));
    };

    setFilterTxt = (val) => {
        this.setState(prevState => ({ filter: { ...prevState.filter, txt: val }, }), () => {
            this.loadEmails()
        });
    };

    setFilterStatus = (value) => {
        let status;

        if (value === '0') status = 'unread';
        if (value === '1') status = null;
        if (value === '2') status = 'read';

        this.setState(prevState => ({ filter: { ...prevState.filter, status }, }), () => {
            this.loadEmails()
        });

    };

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

    toggleEmailStatus = (emailId) => {
        console.log('email app toggle status got', emailId);
        emailService.toggleEmailStatus(emailId);
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
                {emails && <EmailsList emails={emails} deleteMail={this.deleteMail} toggleEmailStatus={this.toggleEmailStatus} openMail={this.openMail} />}
                {isComposing && <EmailCompose submitMail={this.submitMail} toggleCompositor={this.toggleCompositor} />}
            </main>

        )
    }
}