export default function EmailPreview(props) {

    const body = (props.email.body.length < 90) ? props.email.body : props.email.body.slice(0, 90) + '...';
    const dateArr = new Date(props.email.sentAt).toString().split(' ');
    const date = dateArr.splice(1,3).join(' ');
    const mailStatus = (props.email.isRead) ? 'read' : 'unread';
    


    return (
        <tr onClick={()=>{props.openMail(props.email.id)}} className="email-preview">
            <td className={`td-from-to ${mailStatus}`}>{props.email.from}</td>
            <td className={`td-subject ${mailStatus}`}>{props.email.subject}</td>
            <td className="td-body">{body}</td>
            <td className={`td-date ${mailStatus}`}>{date}</td>
            <td onClick={() => {
                props.toggleEmailStatus(props.email.id)
            }} className="td-status">
                <svg viewBox="0 0 448 512">
                    <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
                </svg>
            </td>
            <td onClick={() => {
                props.deleteMail(props.email.id)
            }} className="td-delete">
                <svg viewBox="0 0 448 512">
                    <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
                </svg>
            </td>
        </tr>
    );
};