import EmailHeader from '../cmps/EmailCmps/EmailHeader.jsx'
import EmailSidebar from '../cmps/EmailCmps/EmailSidebar.jsx'
import EmailsList from '../cmps/EmailCmps/EmailsList.jsx'
import emailService from '../services/emailService.js'

export default class EmailApp extends React.Component {

    state = {
        emails: null
    }

    componentDidMount() {
        emailService.query()
        .then(emails => this.setState({emails}));
    }

    render() {

        const { emails } = this.state;

        return (
            <main>
                <EmailSidebar />
                {emails && <EmailsList emails={emails} />}
            </main>

        )
    }
}