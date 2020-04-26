export default class EmailSidebar extends React.Component {


    render() {

        return (
            <section className="side-bar-container">
                <button className="compose-mail-btn">Compose</button>
                <button className="mail-location-btn">Inbox</button>
                <button className="mail-location-btn">Sent</button>
            </section>
        )

    }

}