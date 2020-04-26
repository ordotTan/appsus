export default function EmailPreview(props) {

    let body = (props.email.body.length < 70) ? props.email.body : props.email.body.slice(0,70) + '...';

    return (
        <tr className="email-preview">
            <td className="td-from-to">{props.email.from}</td>
            <td className="td-subject">{props.email.subject}</td>
            <td className="td-body">{body}</td>
            <td onClick={()=>{
                props.deleteMail(props.email.id)
            }} className="td-delete">delete</td>
        </tr>
    );
};