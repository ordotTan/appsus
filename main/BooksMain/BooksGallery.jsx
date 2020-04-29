import booksService from '../../services/booksService.js'
import BookList from '../../cmps/BooksCmps/BookList.jsx'
import AddBook from '../../cmps/BooksCmps/addBook.jsx'
import BookAddedMsg from '../../cmps/BooksCmps/BookAddedMsg.jsx'
import eventBusService from '../services/eventBusService.js'

export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: {
            title: '',
            minPrice: 0,
            maxPrice: Infinity
        }
    };

    componentDidMount() {
        this.removeFilterEB = eventBusService.on('filter-books', (filter) => {
            this.setFilter(filter)
        });
        this.loadBooks();
    }

    loadBooks = () => {
        let books = booksService.query(this.state.filterBy)
        this.setState({ books })
    }

    setFilter = (filter) => {
        console.log('books gallery got', filter)

        if (filter.minPrice) {
            minPrice = filter.minPrice;
            maxPrice = filter.maxPrice
            this.setState(prevState => ({ filter: { ...prevState.filter, minPrice, maxPrice } }, ()=>{
                this.loadBooks();
            }));
        } else {
            let title = filter
            this.setState(prevState => ({ title: { ...prevState.filter, title } }, ()=>{
                this.loadBooks();
            }));
        };
    };

    render() {

        const { books } = this.state;

        return (
            <section className="books-main-container">
                <BookAddedMsg />
                <AddBook refreshBooks={this.loadBooks} />
                <BookList onSelectBook={this.onSelectBook} books={books} />
            </section>
        );
    };
};