import Reviews from '../../cmps/BooksCmps/Reviews.jsx'
import BookDesc from '../../cmps/BooksCmps/BookDesc.jsx'
import booksService from '../../services/booksService.js';
const { Link } = ReactRouterDOM

export default class BookDetails extends React.Component {

    state = {
        pageCountTitle: 'Decent Reading',
        publishDateTitle: 'New!',
        priceClassName: 'red-book-price',
        currencySymbol: false,
        isLongText: false,
        book: null
    };

    loadBook() {
        const id = this.props.match.params.bookId
        booksService.getById(id)
            .then(book => {
                this.setState({ book }, () => this.init())
            });
    }

    componentDidMount() {
        this.loadBook();
    };

    init() {
        const { book } = this.state;

        let pageCountTitle;
        let publishDateTitle;
        let priceClassName;
        const currYear = new Date().getFullYear();

        if (book.pageCount > 500) pageCountTitle = 'Long Reading';
        if (book.pageCount > 200) pageCountTitle = 'Decent Reading';
        if (book.pageCount > 100) pageCountTitle = 'Medium Reading';
        if (book.pageCount < 100) pageCountTitle = 'Light Reading';

        if ((currYear - book.published) > 10) publishDateTitle = 'Veteran';
        if ((currYear - book.published) <= 1) publishDateTitle = 'New!';

        if (book.listPrice.amount > 150) priceClassName = 'red-book-price';
        if (book.listPrice.amount < 50) priceClassName = 'green-book-price';

        const currency = book.listPrice.currencyCode
        let currencySymbol;

        switch (currency) {
            case 'ILS':
                currencySymbol = '₪'
                break;
            case 'USD':
                currencySymbol = '$'
                break;
            case 'EUR':
                currencySymbol = '€'
                break;
            default:
                break;
        }

        this.setState({ pageCountTitle, publishDateTitle, priceClassName, currencySymbol });
    }

    toggleLongText = () => {
        this.setState(prevState => ({ isLongText: !prevState.isLongText }))
    }

    render() {
        console.log('book details')

        const { book } = this.state
        const { onBack } = this.props

        return (!book) ? "Loading" : (
        
            <section className="books-details-page">
                <nav className="books-details-nav">
                    <h3>Previous Book</h3>
                    <Link to='/books'>
                        <button>Back</button>
                    </Link>
                        <h3>Next Book</h3>
                </nav>
                <div className="book-details-container">
                    <div className="book-details">
                        <h1>{book.title}</h1>
                        {book.listPrice.isOnSale && <img className="sale-img" src="assets/img/sale.png"/>}
                        <img className="book-details-img" src={book.thumbnail} alt="" />
                        <h3>{this.state.pageCountTitle}</h3>
                        <h3>{this.state.publishDateTitle}</h3>
                        <h3 className={this.state.priceClassName}>Price: {book.listPrice.amount} {this.state.currencySymbol}</h3>
                        <BookDesc desc={book.description} isLongText={this.state.isLongText} toggleLongText={this.toggleLongText} />
                    </div>
                    <Reviews book={book} />
                </div>
            </section>
        )
    };
}