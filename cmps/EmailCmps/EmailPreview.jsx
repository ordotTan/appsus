export default function EmailPreview(props) {


    const body = (props.email.body.length < 90) ? props.email.body : props.email.body.slice(0, 90) + '...';
    const dateArr = new Date(props.email.date).toString().split(' ');
    const date = dateArr.splice(1, 3).join(' ');
    const mailStatus = (props.email.isRead) ? 'read' : 'unread';
    const mailStatusBtn = (props.email.isRead) ? 'M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0118.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 01512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 001.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 001.839-10.967l-9.071-13.196z'
        : 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
    const noPropagation = e => e.stopPropagation()

    return (
        <tr onClick={() => { props.openMail(props.email.id) }} className="email-preview">
            <td className={`td-from-to ${mailStatus}`}>{props.email.from}</td>
            <td className={`td-subject ${mailStatus}`}>{props.email.subject}</td>
            <td className="td-body">{body}</td>
            <td className={`td-date ${mailStatus}`}>{date}</td>
            <td className="td-btns">
                <a onClick={(event) => {
                    props.sendToNotes(event, props.email)
                }}>
                    <svg className="send-to-note-icon" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z" />
                    </svg>
                </a>
                <svg onClick={(event) => {
                    props.toggleEmailStatus(event, props.email.id)
                }} className='read-unread-icon' viewBox="0 0 512 512">
                    <path fill="currentColor" d={mailStatusBtn} />
                </svg>
                <svg className="delete-icon" viewBox="0 0 448 512">
                    <path onClick={(event) => {
                        props.deleteMail(event, props.email.id)
                    }} fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
                </svg>
            </td>
        </tr>
    );
};