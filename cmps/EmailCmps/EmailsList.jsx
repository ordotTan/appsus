import EmailPreview from './EmailPreview.jsx'
import utilService from '../../services/utilService.js'

export default function EmailsList(props) {

    const up = '\u25B2';
    const dn = '\u25BC';

    let order = props.sort.order;
    let sortBy = props.sort.sortBy;

    let fromUp = ''
    let fromDn = ''
    let subjectUp = ''
    let subjecDn = ''
    let dateUp = ''
    let dateDn = ''

    if (sortBy === 'from' && !order) fromUp = 'sort-active'
    if (sortBy === 'from' && order) fromDn = 'sort-active'
    if (sortBy === 'subject' && !order) subjectUp = 'sort-active'
    if (sortBy === 'subject' && order) subjecDn = 'sort-active'
    if (sortBy === 'date' && !order) dateUp = 'sort-active'
    if (sortBy === 'date' && order) dateDn = 'sort-active'

    return (
        <section className="emails-list-container">
            <table>
                <tbody>
                    <tr>
                        <th onClick={()=>{
                            props.setSort('from')
                        }} className="sort">From &nbsp;<span className={fromUp}>{up}</span><span className={fromDn}>{dn}</span></th>
                        <th onClick={()=>{
                            props.setSort('subject')
                        }} className="sort">Subject &nbsp;<span className={subjectUp}>{up}</span><span className={subjecDn}>{dn}</span></th>
                        <th className="th-message">Message</th>
                        <th onClick={()=>{
                            props.setSort('date')
                        }} className="sort">Date &nbsp;<span className={dateUp}>{up}</span><span className={dateDn}>{dn}</span></th>
                        <th className="th-unread">{`${props.unreadCount} Unread`}</th>
                    </tr>
                    {props.emails.map(email => <EmailPreview sendToNotes={props.sendToNotes} openMail={props.openMail} email={email} key={utilService.makeId(4)} toggleEmailStatus={props.toggleEmailStatus} deleteMail={props.deleteMail} />)}
                </tbody>
            </table>
        </section>

    );
};