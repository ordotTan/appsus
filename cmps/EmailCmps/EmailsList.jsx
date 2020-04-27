import EmailPreview from './EmailPreview.jsx'
import emailService from '../../services/emailService.js'
import utilService from '../../services/utilService.js'

export default function EmailsList(props) {

    return (
        <section className="emails-list-container">
            <table>
                <tbody>
                    <tr>
                        <th>From</th>
                        <th>Subject</th>
                        <th colSpan="3">Message</th>
                    </tr>
                    {props.emails.map(email => <EmailPreview openMail={props.openMail} email={email} key={utilService.makeId(4)} deleteMail={props.deleteMail}/>)}
                </tbody>
            </table>
        </section>

    )
}