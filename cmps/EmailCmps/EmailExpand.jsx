export default class EmailCompose extends React.Component {


    render() {

        return (
            <section className="mail-window-container">
                <div className="mail-window-header">
                    <h3>New Message</h3>
                    <h4 onClick={this.onCloseComposer} className="close-mail-window">X</h4>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.fromInput} type="text" value="From: Daniel Goldfine" readOnly />
                    <input ref={this.toInput} type="text" placeholder="To" />
                    <input ref={this.subjectInput} type="text" placeholder="Subject" />
                    <textarea className="body-input" ref={this.bodyInput} type="text" placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" value="Send" />
                </form>
            </section>
        )
    };
};