import EmailExpand from '../cmps/EmailCmps/EmailExpand.jsx'
import EmailSidebar from '../cmps/EmailCmps/EmailSidebar.jsx'
import EmailsList from '../cmps/EmailCmps/EmailsList.jsx'
import EmailCompose from '../cmps/EmailCmps/EmailCompose.jsx'
import eventBusService from "../services/eventBusService.js";
import emailService from '../services/emailService.js'

export default class EmailApp extends React.Component {

    state = {
        emails: null,
        unreadCount: null,
        isComposing: false,
        expandEmail: {
            isEmailOpen: false,
            email: null
        },
        filter: {
            txt: null,
            status: null
        },
        sort: {
            sortBy: 'date',
            order: true
        },
        note: null
    };

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

        const urlParams = new URLSearchParams(window.location.search);
        let noteType = urlParams.get('noteType');
        let noteInfo = urlParams.get('noteInfo');
        if (noteType) {
            console.log('url got', noteType, JSON.parse(noteInfo))
            let noteObj = JSON.parse(note);
            this.setState({ note: noteObj }, () => {
                this.toggleCompositor()
            })
        }
        window.history.replaceState({}, document.title, "/index.html#/email");
    };

    componentWillUnmount() {
        this.removeFilterTextEB();
        this.removeFilterStatusEB();
    };

    loadEmails() {
        const { filter, sort } = this.state
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
        if (this.state.note && this.state.isComposing) {
            this.setState({ note: null })
        };
    };

    submitMail = (from, to, subject, body) => {
        emailService.sendEmail(from, to, subject, body);
        this.loadEmails();
    };

    deleteMail = (emailId) => {
        event.stopPropagation();
        emailService.deleteMail(emailId)
            .then(res => {
                this.setUnreadCount();
                this.loadEmails();
            });
    };

    toggleEmailStatus = (ev, emailId) => {
        // this.toggleExpandEmail();
        console.log('toggel got', ev)
        ev.stopPropagation();
        emailService.toggleEmailStatus(emailId)
            .then(res => {
                this.setUnreadCount();
                this.loadEmails();
            });
    };

    openEmail(emailId) {
        emailService.openEmail(emailId)
        .then(res =>{
            this.setUnreadCount();
            this.loadEmails();
        });
    };

    toggleExpandEmail = (emailId) => {

        const { expandEmail } = this.state;

        emailService.getById(emailId)
            .then(email => {

                if (expandEmail.isOpen) {

                    if(emailId) {
                        this.setState(prevState =>({ expandEmail: {...prevState.expandEmail, email : email} }))
                        this.openEmail(emailId);
                        return;
                    };
                    this.setState(prevState => ({ expandEmail: { ...prevState.expandEmail, isOpen: false, email: null } }));
                    return;
                };
                this.setState(prevState => ({ expandEmail: { ...prevState.expandEmail, email, isOpen: true } }));
                this.openEmail(emailId);
            });
    };

    render() {

        const { emails, isComposing, unreadCount, note, expandEmail } = this.state;

        return (
            <main className="email">
                <EmailSidebar toggleCompositor={this.toggleCompositor} />
                {emails && <EmailsList emails={emails} unreadCount={unreadCount} setSort={this.setSort} deleteMail={this.deleteMail} toggleEmailStatus={this.toggleEmailStatus} openMail={this.toggleExpandEmail} />}
                {isComposing && <EmailCompose note={note} submitMail={this.submitMail} toggleCompositor={this.toggleCompositor} />}
                {expandEmail.isOpen && <EmailExpand email={expandEmail.email} toggleExpandEmail={this.toggleExpandEmail} toggleEmailStatus={this.toggleEmailStatus} deleteMail={this.deleteMail} />}
            </main>

        );
    };
};