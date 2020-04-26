export default function EmailPreview(props) {
    
    return (
        <tr className="email-preview">
            <td>{props.email.from}</td>
            <td>{props.email.subject}</td>
            <td>{props.email.body.slice(0,70)}...</td>
        </tr>
    );
};