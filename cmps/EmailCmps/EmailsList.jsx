import EmailPreview from './EmailPreview.jsx'
import emailService from '../../services/emailService.js'
import utilService from '../../services/utilService.js'

export default function EmailsList(props) {

    const up = '\u25B2';
    const dn = '\u25BC';

    return (
        <section className="emails-list-container">
            <table>
                <tbody>
                    <tr>
                        <th onClick={()=>{
                            props.setSort('from')
                        }} className="sort">From &nbsp;{up}{dn}</th>
                        <th onClick={()=>{
                            props.setSort('subject')
                        }} className="sort">Subject &nbsp;{up}{dn}</th>
                        <th>Message</th>
                        <th onClick={()=>{
                            props.setSort('date')
                        }} className="sort">Date &nbsp;{up}{dn}</th>
                        <th className="th-unread" colSpan="2">{`${props.unreadCount} Unread`}</th>
                    </tr>
                    {props.emails.map(email => <EmailPreview openMail={props.openMail} email={email} key={utilService.makeId(4)} toggleEmailStatus={props.toggleEmailStatus} deleteMail={props.deleteMail} />)}
                </tbody>
            </table>
        </section>

    );
};