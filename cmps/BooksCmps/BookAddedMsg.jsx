import eventBusService from "../../services/eventBusService.js";
import { Fragment } from "react";
const {Link} = ReactRouterDOM;

export default class BookAddedMsg extends React.Component {

    state = {
        isMsgShown : false,
        newBook : null
    }

    componentDidMount() {
        this.removeEventBus = eventBusService.on('show-added-book-msg', (book) =>{
            this.setState({newBook: book});
            this.setState({isMsgShown: true})
            setTimeout(()=>{
                this.setState({isMsgShown: false})
                this.setState({newBook: null});
            },4000)
        })
    }

    closeMsg() {
        this.setState({isMsgShown: false})
        this.setState({newBook: null});
    }

    componentWillUnmount() {
        this.closeMsg;
    }

    render() {

        const {isMsgShown, newBook} = this.state

        return (!isMsgShown) ? '' :
        <React.Fragment>
            <section className="book-added-msg-container">
                <h4>You just added:</h4>
                <h1>{newBook.volumeInfo.title}</h1>
                <button onClick={()=>{this.closeMsg()}}>X</button>
                <img src={newBook.volumeInfo.imageLinks.thumbnail} alt=""/>
                <Link to={`/book/${newBook.id}`}>
                <p>Go to book page</p>
                </Link>
            </section>
            <section className="darken-screen"></section>
            </React.Fragment>
    };
}