import booksService from "../../services/booksService.js";
import ReviewsList from "./ReviewsList.jsx";

export default class Reviews extends React.Component {

    constructor() {
        super();
        this.review = React.createRef();
        this.fullName = React.createRef();
        this.rate = React.createRef();
        this.date = React.createRef();
    }

    state = {
        rateVal: '5'
    }

    componentDidMount() {
        this.review.current.focus();
        this.setTodayDate();
    }

    setTodayDate() {
        let today = new Date();
        this.date.current.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }

    updateRangeValue = () => {
        this.setState({ rateVal: this.rate.current.value });
    }

    onSubmitReview(ev, review, fullName, rate, date) {
        ev.preventDefault();
        if (review === '' || fullName === '') return;
        const bookId = this.props.book.id;
        booksService.addReview(bookId, review, fullName, rate, date);
        this.resetValues()
    }

    resetValues() {
        this.review.current.value = '';
        this.fullName.current.value = '';
        let today = new Date();
        this.date.current.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        this.setState({rateVal : '5'});
    }

    render() {

        const {book} = this.props;

        return <div className="reviews-container">
            <form onSubmit={() => {
                this.onSubmitReview(event, this.review.current.value, this.fullName.current.value, this.rate.current.value, this.date.current.value)
            }}>
                <label>Add your review</label>
                <textarea className="review-input" ref={this.review} rows="5" cols="50"></textarea>
                <label>Your full name</label>
                <input className="full-name-input" type="text" ref={this.fullName}/>
                <label>Rate book: <span>{this.state.rateVal}</span></label>
                <input ref={this.rate} className="rate-input" value={this.state.rateVal} type="range" min="0" max="10"
                    onChange={this.updateRangeValue} />
                <label>Read on</label>
                <input type="date" ref={this.date}/>
                <input type="submit" className="submit-btn" />
            </form>
            {book.reviews && <ReviewsList book={book}/>}
        </div>
    }
}