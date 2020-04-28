import { Fragment } from "react";

export default function EmailExpand(props) {

    let emailToUrl = JSON.stringify(props.email);
    let date = new Date(props.email.date).toString().split(' ').splice(1, 4).join(' ');

    return (
        <React.Fragment>
            <section className="mail-window-container mail-expanded">
                <div className="mail-window-header">
                    <h3>{props.email.subject}</h3>
                    <h4 onClick={() => {
                        props.toggleExpandEmail()
                    }} className="close-mail-window">X</h4>
                </div>
                <form>
                    <input type="text" value={`From: ${props.email.from}`} readOnly />
                    <input type="text" value={`To: ${props.email.to}`} readOnly />
                    <textarea className="body-input" type="text" value={props.email.body} readOnly></textarea>
                    <p>Received at: <span>{date}</span></p>
                </form>
                <div className="mail-expand-options">
                    <a href={`/index.html?email=${emailToUrl}#/keep`}>
                        <svg className="send-to-note-icon" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z" />
                        </svg>
                    </a>
                    <svg className="email-expand-check-unread" viewBox="0 0 512 512">
                        <path onClick={(event) => {
                            props.toggleEmailStatus(event, props.email.id)
                        }} fill="currentColor" d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z' />
                    </svg>
                    <svg className="mail-expand-delete-btn" viewBox="0 0 448 512">
                        <path onClick={() => {
                            props.deleteMail(event, props.email.id)
                        }} fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
                    </svg>
                </div>
            </section>
            <div className="dark-screen"></div>
        </React.Fragment>
    )
};