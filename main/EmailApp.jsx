import EmailHeader from '../cmps/EmailCmps/EmailHeader.jsx'
import EmailSidebar from '../cmps/EmailCmps/EmailSidebar.jsx'
import EmailsList from '../cmps/EmailCmps/EmailsList.jsx'
import EmailCompose from '../cmps/EmailCmps/EmailCompose.jsx'
import eventBusService from "./services/eventBusService.js";
import emailService from '../services/emailService.js'

export default class EmailApp extends React.Component {

    state = {
        emails: null,
        unreadCount: null,
        isComposing: false,
        filter: {
            txt: null,
            status: null
        },
        sort: {
            sortBy: 'date',
            order: true
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
        this.setUnreadCount();
        this.loadEmails();
    };

    componentWillUnmount() {
        this.removeFilterTextEB();
        this.removeFilterStatusEB();
    };

    loadEmails() {
        const {filter, sort} = this.state
        emailService.query(filter, sort)
            .then(emails => this.setState({ emails }));
    };

    setUnreadCount() {
        emailService.getUnreadCount()
            .then(unreadCount => this.setState({ unreadCount }));
    }

    setFilterTxt = (val) => {
        this.setState(prevState => ({ filter: { ...prevState.filter, txt: val }, }), () => {
            this.loadEmails()
        });
    };

    setSort = (sortBy) => {

        const { sort } = this.state;
        let order;

        if (sortBy === sort.sortBy) {
            order = !sort.order;
        } else {
            order = true;
        };

        this.setState(prevState => ({ sort: { ...prevState.sort, sortBy, order }, }), () => {
            this.loadEmails();
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
        emailService.deleteMail(mailId)
            .then(res => {
                this.setUnreadCount();
                this.loadEmails();
            });
    };

    toggleEmailStatus = (emailId) => {
        event.stopPropagation();
        emailService.toggleEmailStatus(emailId)
            .then(res => {
                this.setUnreadCount();
                this.loadEmails();
            });
    };


    openMail = (mailId) => {
        console.log('open mail happend', mailId);
    };

    render() {

        const { emails, isComposing, unreadCount } = this.state;

        return (
            <main className="email">
                <EmailSidebar toggleCompositor={this.toggleCompositor} />
                {emails && <EmailsList emails={emails} unreadCount={unreadCount} setSort={this.setSort} deleteMail={this.deleteMail} toggleEmailStatus={this.toggleEmailStatus} openMail={this.openMail} />}
                {isComposing && <EmailCompose submitMail={this.submitMail} toggleCompositor={this.toggleCompositor} />}
            </main>

        )
    }
}