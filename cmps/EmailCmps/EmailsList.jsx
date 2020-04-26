import EmailPreview from './EmailPreview.jsx'
import emailService from '../../services/emailService.js'
import utilService from '../../services/utilService.js'

export default function EmailsList(props) {

    console.log('email list got', props.emails)

    return (
        <section className="emails-list-container">
            <table>
                {props.emails.map(email => <EmailPreview email={email} key={utilService.makeId(4)} />)}
            </table>
        </section>

    )
}